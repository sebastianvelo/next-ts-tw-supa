import TabDTO from "@/presentation/view/dto/common/tab";
import getComponent from "..";
import { TabItem } from "@/molecules/tabs/types";

const buildTab = (tab: TabDTO<any>): TabItem => {
    const Component = getComponent(tab.ui);

    return {
        ...tab,
        content: Component ? <Component {...tab.content} /> : null,
    };
}

export const getTabs = (tabs?: TabDTO<any>[]): TabItem[] => tabs?.map(buildTab) || [];
