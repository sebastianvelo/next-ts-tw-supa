import PageContent from "@/components/layout/main/PageContent";
import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import UserInstitutionsListViewDTO from "@/lib/user/view/builders/institutions/dto";

interface UserInstitutionsListViewProps extends UserInstitutionsListViewDTO { }

const UserInstitutionsListView: React.FC<UserInstitutionsListViewProps> = ({ section }) => (
  <PageContent>
    <CardListSection {...section} fallback={{ condition: section?.items?.length === 0, FallbackContent: EmptySection }} />
  </PageContent>
);

export default UserInstitutionsListView;