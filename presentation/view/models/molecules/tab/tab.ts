import PageTabDTO from "@/presentation/view/models/main/tabs";

export type TabData = {
    id: string;
    route: (id: string) => string;
    label: string;
    tabs?: Omit<TabData, "id">[];
};

const buildTab = <T>({ id, route, label, tabs }: TabData): PageTabDTO<T> => ({
    label,
    href: route(id),
    tabs: tabs?.map(t => buildTab<T>({ id, ...t }))
});

export default buildTab;