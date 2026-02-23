import PageContent from "@/components/layout/main/content/PageContent";
import Tabs, { TabItem } from "@/components/ui/molecules/tabs/Tabs";
import TabDTO from "@/core/view/DTO/common/tab";
import getComponent from "@/core/view/registry";

const buildTab = (tab: TabDTO<any>): TabItem => {
    const Component = getComponent(tab.ui);

    return {
        ...tab,
        content: Component ? <Component {...tab.content} /> : null,
    };
}

const getTabs = (tabs?: TabDTO<any>[]): TabItem[] => tabs?.map(buildTab) || [];

interface PageTabsViewProps {
    tabs?: TabDTO<any>[];
    horizontal?: boolean;
}

const PageTabsView: React.FC<PageTabsViewProps> = ({ tabs, horizontal }) => (
    <PageContent>
        <Tabs tabs={getTabs(tabs)} horizontal={horizontal} />
    </PageContent>
);

export default PageTabsView;