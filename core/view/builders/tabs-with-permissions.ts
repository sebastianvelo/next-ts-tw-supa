import { PageTabDTO } from "../DTO/page/tabs";

export type TabPermissionValidator<T, P> = {
    tabs: PageTabDTO<T>[];
    perm: P;
}

type PermissionChecker<T> = (tab: PageTabDTO<T>) => boolean;

type FilterAndMapTabsBuilder<T> = {
    tabs: PageTabDTO<T>[];
    hasPermission: PermissionChecker<T>;
}

const filterAndMapTabs = <T>({ tabs, hasPermission }: FilterAndMapTabsBuilder<T>): PageTabDTO<T>[] => {
    const result = tabs
        .filter(tab => !tab.permissionRequired || hasPermission(tab))
        .map(tab => ({
            ...tab,
            tabs: tab.tabs ? filterAndMapTabs({ tabs: tab.tabs, hasPermission }) : undefined
        }));

    return result.length > 1 ? result : [];
};

export default filterAndMapTabs;
