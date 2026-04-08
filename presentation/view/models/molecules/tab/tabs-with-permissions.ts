import PageTabDTO from "@/presentation/view/models/main/tabs";

export type TabPermissionValidator<T, P> = {
    tabs: PageTabDTO<T>[];
    perm: P;
}

type PermissionChecker<T> = (tab: PageTabDTO<T>) => boolean;

type FilterAndMapTabsBuilder<T> = {
    tabs: PageTabDTO<T>[];
    hasPermission: PermissionChecker<T>;
}

const buildTabsWithPermissions = <T>({ tabs, hasPermission }: FilterAndMapTabsBuilder<T>): PageTabDTO<T>[] => {
    const result = tabs
        .filter(tab => !tab.permissionRequired || hasPermission(tab))
        .map(tab => ({
            ...tab,
            tabs: tab.tabs ? buildTabsWithPermissions({ tabs: tab.tabs, hasPermission }) : undefined
        }));

    return result.length > 1 ? result : [];
};

export default buildTabsWithPermissions;
