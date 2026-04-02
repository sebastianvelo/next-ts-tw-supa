import PageListView, { IPageListViewProps } from "@/templates/list/PageListView";
import CardListSection from "@/molecules/section/card-section/CardListSection";
import EmptySection from "@/molecules/section/empty-section/EmptySection";
import CardListSectionDTO from "@/presentation/view/dto/molecules/section/card-list-section";

interface PageCardListViewProps extends IPageListViewProps<CardListSectionDTO> { }

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