import PageContent from "@/components/layout/main/PageContent";
import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import UserNotesListViewDTO from "@/lib/user/view/builders/notes/dto";

interface UserNotesListViewProps extends UserNotesListViewDTO { }

const UserNotesListView: React.FC<UserNotesListViewProps> = ({ list }) => (
  <PageContent>
    <CardListSection {...list} fallback={{ condition: list?.items?.length === 0, FallbackContent: EmptySection }} />
  </PageContent>
);

export default UserNotesListView;