import PageTabDTO from "@/presentation/view/models/main/tabs";
import buildTab, { TabData } from "./tab";

const buildTabs = <T>(id: string, tabs: Omit<TabData, "id">[]): PageTabDTO<T>[] =>
    tabs.map((t) => buildTab<T>({ id, ...t }));

export default buildTabs;