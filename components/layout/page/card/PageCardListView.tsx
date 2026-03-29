import PageListView, { IPageListViewProps } from "@/components/layout/page/list/PageListView";
import CardListSection from "@/layout/card-section/CardListSection";
import EmptySection from "@/layout/empty-section/EmptySection";
import CardListSectionDTO from "@/presentation/view/dto/list-section/card-list-section";

export interface PageCardListViewProps extends IPageListViewProps<CardListSectionDTO> { }

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