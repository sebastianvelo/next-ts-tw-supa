import { GetTabsByCourseRole, GetTabsByInstitutionRole } from "@/core/view/types/tabs";
import CoursePermissionAction from "@/lib/authorization/permission/course/rules/permission-action";
import CoursePermissionService from "@/lib/authorization/permission/course/service";
import InstitutionPermissionAction from "@/lib/authorization/permission/institution/rules/permission-action";
import InstitutionPermissionService from "@/lib/authorization/permission/institution/service";
import { PageTabDTO } from "../DTO/page/tabs";

export const buildTabsValidatingInstitutionPermissions = (tabs: PageTabDTO<InstitutionPermissionAction>[], perm: GetTabsByInstitutionRole): PageTabDTO<InstitutionPermissionAction>[] => {
    return tabs
        .filter(tab => !tab.permissionRequired ? true : InstitutionPermissionService.hasPermission({
            role: perm.role,
            action: tab.permissionRequired,
            visibility: perm.visibility
        }))
        .map(tab => ({
            ...tab,
            tabs: tab.tabs ? buildTabsValidatingInstitutionPermissions(tab.tabs, perm) : undefined
        }));
};

export const buildTabsValidatingCoursePermissions = (tabs: PageTabDTO<CoursePermissionAction>[], perm: GetTabsByCourseRole): PageTabDTO<CoursePermissionAction>[] => {
    const withPermissions = tabs.filter(tab => !tab.permissionRequired ? true : CoursePermissionService.hasPermission({
        courseRole: perm.courseRole,
        institutionRole: perm.institutionRole,
        visibility: perm.visibility,
        action: tab.permissionRequired
    }));

    return withPermissions.length > 1 ? withPermissions.map(tab => ({
        ...tab,
        tabs: tab.tabs ? buildTabsValidatingCoursePermissions(tab.tabs, perm) : undefined
    })) : [];
};