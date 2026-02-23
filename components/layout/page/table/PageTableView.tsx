import { FallbackProps } from "@/components/ui/layout/fallback/Fallback";
import TableSection from "@/components/ui/layout/table-section/TableSection";
import TableSectionDTO from "@/core/view/DTO/list-section/table-section";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";
import PageListView from "../list/PageListView";

interface PageTableViewProps extends ListViewDTO<TableSectionDTO> {
    isLoading: boolean;
    fallback?: FallbackProps;
}

const PageTableView: React.FC<PageTableViewProps> = (props) => (
    <PageListView<TableSectionDTO> ListSection={TableSection} {...props} />
);

export default PageTableView;