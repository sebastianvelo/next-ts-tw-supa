import PageContent from "@/components/layout/content/PageContent";
import { FallbackProps } from "@/molecules/section/fallback/Fallback";
import Loading from "@/molecules/loading/Loading";
import Paginator from "@/molecules/paginator/Paginator";
import { getGridCols } from "@/presentation/view/constants/layout";
import ListViewDTO from "@/presentation/view/dto/templates/list-view";
import PageListViewFilters from "./filters/PageListViewFilters";
import { PageListViewConfig, PageListViewLayout } from "./types";

export interface IPageListViewProps<T> extends ListViewDTO<T> {
    isLoading: boolean;
    fallback?: FallbackProps;
    config?: PageListViewConfig;
    className?: string;
}

interface PageListViewProps<T> extends IPageListViewProps<T> {
    ListSection: React.FC<T>;
}

function PageListView<T>({ isLoading, filters, list, paginator, ListSection, fallback, config, className }: Readonly<PageListViewProps<T>>) {
    const isHorizontal = config?.layout === PageListViewLayout.HORIZONTAL;
    const wrapperClassName = isHorizontal ? "md:grid md:grid-cols-5 w-full" : "w-full";
    const contentClassName = isHorizontal ? "col-span-5 md:col-span-4 space-y-4" : "";

    return (
        <PageContent className={`${wrapperClassName} ${className}`}>
            {filters && (
                <PageListViewFilters filters={filters} config={config?.filters} />
            )}
            <div className={contentClassName}>
                <Loading isLoading={isLoading}>
                    {list && <ListSection {...list} fallback={fallback} className={getGridCols(config?.columns ?? 1)} />}
                </Loading>
                {paginator && <Paginator {...paginator} />}
            </div>
        </PageContent>
    );
}

export default PageListView;