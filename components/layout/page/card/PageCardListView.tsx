import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import { FallbackProps } from "@/components/ui/layout/fallback/Fallback";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";
import ListViewDTO from "@/core/view/DTO/list-view/list-view";
import PageListView from "../list/PageListView";

export interface PageCardListViewProps extends ListViewDTO<CardListSectionDTO> {
    isLoading: boolean;
    fallback?: FallbackProps;
}

const PageCardListView: React.FC<PageCardListViewProps> = ({ fallback, ...props }) => (
    <PageListView<CardListSectionDTO>
        {...props}
        ListSection={CardListSection}
        fallback={fallback ?? {
            condition: !props.list?.items?.length,
            FallbackContent: EmptySection
        }}
    />
);

export default PageCardListView;