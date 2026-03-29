import PageListView, { IPageListViewProps } from "@/components/layout/page/list/PageListView";
import TableSection from "@/layout/table-section/TableSection";
import TableSectionDTO from "@/presentation/view/dto/list-section/table-section";

interface PageTableViewProps extends IPageListViewProps<TableSectionDTO> { }

const PageTableView: React.FC<PageTableViewProps> = (props) => (
    <PageListView<TableSectionDTO> {...props} ListSection={TableSection} />
);

export default PageTableView;