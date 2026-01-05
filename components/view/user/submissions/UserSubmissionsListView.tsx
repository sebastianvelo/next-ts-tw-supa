import PageContent from "@/components/layout/main/PageContent";
import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import UserSubmissionsListViewDTO from "@/lib/user/view/builders/submissions/dto";

interface UserSubmissionsListViewProps extends UserSubmissionsListViewDTO { }

const UserSubmissionsListView: React.FC<UserSubmissionsListViewProps> = ({ list }) => (
  <PageContent>
    <CardListSection {...list} fallback={{ condition: list?.items?.length === 0, FallbackContent: EmptySection }} />
  </PageContent>
);

export default UserSubmissionsListView;