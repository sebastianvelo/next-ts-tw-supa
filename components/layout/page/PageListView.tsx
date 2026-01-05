import PageContent from "@/components/layout/main/PageContent";
import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import FilterBadge from "@/components/ui/molecules/filter-badge/FilterBadge";
import Loading from "@/components/ui/molecules/loading/Loading";
import Paginator from "@/components/ui/molecules/paginator/Paginator";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";

export interface PageListViewProps extends ListViewDTO {
    isLoading: boolean;
}

const PageListView: React.FC<PageListViewProps> = ({ isLoading, filters, list, paginator }) => (
    <PageContent>
        <div className="flex">
            {filters && filters.map((filter) => <FilterBadge key={filter.param} {...filter} />)}
        </div>
        <Loading isLoading={isLoading}>
            <CardListSection {...list} />
        </Loading>
        {paginator && <Paginator {...paginator} />}
    </PageContent>
);

export default PageListView;