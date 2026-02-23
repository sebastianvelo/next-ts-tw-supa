import PageContent from "@/components/layout/main/content/PageContent";
import FiltersSection from "@/components/ui/molecules/filters/FiltersSection";
import Loading from "@/components/ui/molecules/loading/Loading";
import Paginator from "@/components/ui/molecules/paginator/Paginator";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";
import { FallbackProps } from "@/components/ui/layout/fallback/Fallback";

export interface PageListViewProps<T> extends ListViewDTO<T> {
    isLoading: boolean;
    ListSection: React.FC<T>;
    fallback?: FallbackProps;
}

function PageListView<T>({ isLoading, filters, list, paginator, ListSection, fallback }: Readonly<PageListViewProps<T>>) {
    return (
        <PageContent>
            <div className="flex">
                {filters?.map((filter) => <FiltersSection key={filter.param} {...filter} />)}
            </div>
            <Loading isLoading={isLoading}>
                {list && <ListSection {...list} fallback={fallback} />}
            </Loading>
            {paginator && <Paginator {...paginator} />}
        </PageContent>
    );
}

export default PageListView;