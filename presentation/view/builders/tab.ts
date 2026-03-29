import { PageTabDTO } from "@/presentation/view/dto/page/tabs";
import AuthorizationService from "@/modules/authorization/application/service";

export type TabData = {
    id: string;
    route: (id: string) => string;
    label: string;
    tabs?: Omit<TabData, "id">[];
};

const buildTab = <T>({ id, route, label, tabs }: TabData): PageTabDTO<T> => ({
    label,
    href: route(id),
    permissionRequired: AuthorizationService.getPermissionRequired(route) as T,
    tabs: tabs?.map(t => buildTab<T>({ id, ...t }))
});

export default buildTab;