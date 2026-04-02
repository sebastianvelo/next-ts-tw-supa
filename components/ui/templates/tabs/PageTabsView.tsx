import PageContent from "@/components/layout/content/PageContent";
import Tabs from "@/molecules/tabs/Tabs";
import TabDTO from "@/presentation/view/models/molecules/tab/dto";
import { getTabs } from "./utils";

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