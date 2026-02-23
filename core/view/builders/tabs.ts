import { PageTabDTO } from "../DTO/page/tabs";
import tab, { TabData } from "./tab";

const buildTabs = <T>(id: string, tabs: Omit<TabData, "id">[]): PageTabDTO<T>[] =>
    tabs.map((t) => tab<T>({ id, ...t }));

export default buildTabs;