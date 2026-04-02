import TabDTO from "@/presentation/view/dto/molecules/tab/dto";
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
