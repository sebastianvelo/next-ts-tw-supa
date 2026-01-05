import CourseRole from "@/lib/course-membership/model/enum/course-role";
import CourseVisibility from "@/lib/course/model/enum/course-visibility";
import InstitutionRole from "@/lib/institution-membership/model/enum/institution-role";
import InstitutionVisibility from "@/lib/institution/model/enum/institution-visibility";

export type GetTabsByCourseRole = {
    id: string;
    courseRole?: CourseRole;
    visibility: CourseVisibility;
    institutionRole?: InstitutionRole;
}

export type GetTabsByInstitutionRole = {
    id: string;
    role?: InstitutionRole | null;
    visibility: InstitutionVisibility;
}