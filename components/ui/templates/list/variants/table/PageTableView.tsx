import PageListView, { IPageListViewProps } from "@/templates/list/PageListView";
import TableSection from "@/molecules/section/table-section/TableSection";
import TableSectionDTO from "@/presentation/view/dto/molecules/section/table-section";

interface PageTableViewProps extends IPageListViewProps<TableSectionDTO> { }

const PageTableView: React.FC<PageTableViewProps> = (props) => (
    <PageListView<TableSectionDTO> {...props} ListSection={TableSection} />
);

export default PageTableView;