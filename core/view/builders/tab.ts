import { PageTabDTO } from "@/core/view/DTO/page/tabs";
import AuthorizationService from "@/lib/authorization/service";

export type TabData = {
    id: string;
    route: (id: string) => string;
    label: string;
    tabs?: Omit<TabData, "id">[];
};

const tab = <T>({ id, route, label, tabs }: TabData): PageTabDTO<T> => ({
    label,
    href: route(id),
    permissionRequired: AuthorizationService.getPermissionRequired(route) as T,
    tabs: tabs?.map(t => tab<T>({ id, ...t }))
});

export default tab;