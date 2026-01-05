import ERRORS from "@/errors";
import AssessmentService from "@/lib/assessment/service";
import AuthService from "@/lib/auth/service";
import CoursePermissionService from "@/lib/authorization/permission/course/service";
import InstitutionPermissionService from "@/lib/authorization/permission/institution/service";
import CourseService from "@/lib/course/service";
import InstitutionService from "@/lib/institution/service";
import LessonService from "@/lib/lesson/service";
import ProgramService from "@/lib/program/service";
import SubjectService from "@/lib/subject/service";
import User from "@/lib/user/model";
import UserService from "@/lib/user/service";
import ROUTE_CONFIG_MAP from "@/routes/config";
import ID from "@/routes/config/ID";
import { PathBuilder } from "@/routes/types/types";
import CoursePermissionAction from "../permission/course/rules/permission-action";
import InstitutionPermissionAction from "../permission/institution/rules/permission-action";
import { AuthorizeAssessmentAction, AuthorizeCourseAction, AuthorizeInstitutionAction, AuthorizeLessonAction, AuthorizeProgramAction, AuthorizeRoute, AuthorizeSubjectAction } from "./types";

class AuthorizationService {
    async getCurrentUserOrThrow(): Promise<User> {
        const { user: authUser, error } = await AuthService.getAuthUser();

        if (error || !authUser) {
            throw ERRORS.AUTH.UNAUTHENTICATED;
        }

        const user = await UserService.getByAuthIdOrThrow(authUser.id);
        return user;
    }

    async authorizeInstitutionAction({ id, action }: AuthorizeInstitutionAction) {
        const user = await this.getCurrentUserOrThrow();
        const institution = await InstitutionService.getByIdWithRole(id, user.id);

        await InstitutionPermissionService.requirePermission({ institutionId: id, action, visibility: institution.visibility });

        return { institution, user };
    }

    async authorizeProgramAction({ id, action }: AuthorizeProgramAction) {
        const program = await ProgramService.getByIdOrThrow(id);
        const { institution } = await this.authorizeInstitutionAction({ id: program.institutionId, action });

        return { program, institution };
    }

    async authorizeSubjectAction({ id, action }: AuthorizeSubjectAction) {
        const subject = await SubjectService.getByIdOrThrow(id);
        const program = await ProgramService.getByIdOrThrow(subject.programId);
        const { institution } = await this.authorizeInstitutionAction({ id: program.institutionId, action });

        return { subject, program, institution };
    }

    async authorizeCourseAction({ id, action }: AuthorizeCourseAction) {
        const user = await this.getCurrentUserOrThrow();
        const course = await CourseService.getByIdWithRole(id, user.id);

        await CoursePermissionService.requirePermission({ courseId: id, action, visibility: course.visibility });

        return { course, user };
    }

    async authorizeAssessmentAction({ id, action }: AuthorizeAssessmentAction) {
        const assessment = await AssessmentService.getByIdOrThrow(id);

        const { course } = await this.authorizeCourseAction({ id: assessment.courseId, action });

        return { assessment, course };
    }

    async authorizeLessonAction({ id, action }: AuthorizeLessonAction) {
        const lesson = await LessonService.getByIdOrThrow(id);

        const { course } = await this.authorizeCourseAction({ id: lesson.courseId, action });

        return { lesson, course };
    }

    async authorizeInstitutionRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<InstitutionPermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeInstitutionAction({ id, action: permission });

        return data;
    }

    async authorizeProgramRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<InstitutionPermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeProgramAction({ id, action: permission });
        return data;
    }

    async authorizeSubjectRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<InstitutionPermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeSubjectAction({ id, action: permission });
        return data;
    }

    async authorizeCourseRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<CoursePermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeCourseAction({ id, action: permission });
        return data;
    }

    async authorizeAssessmentRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<CoursePermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeAssessmentAction({ id, action: permission });
        return data;
    }

    async authorizeLessonRoute({ route, id }: AuthorizeRoute) {
        const permission = this.getPermissionRequired<CoursePermissionAction>(route);
        if (!permission) {
            throw ERRORS.INVALID_ROUTE(typeof route === "string" ? route : route(ID));
        }

        const data = await this.authorizeLessonAction({ id, action: permission });
        return data;
    }

    getPermissionRequired<P extends CoursePermissionAction | InstitutionPermissionAction>(route: PathBuilder | string): P | undefined {
        return ROUTE_CONFIG_MAP[typeof route === "string" ? route : route(ID)]?.requiredPermission as P;
    }
}

export default new AuthorizationService();