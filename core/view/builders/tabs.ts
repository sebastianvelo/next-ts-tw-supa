import { PageTabDTO } from "../DTO/page/tabs";
import tab, { TabData } from "./tab";

const buildTabs = <T>(tabs: TabData[]): PageTabDTO<T>[] =>
    tabs.map((t) => tab<T>(t));

export default buildTabs;