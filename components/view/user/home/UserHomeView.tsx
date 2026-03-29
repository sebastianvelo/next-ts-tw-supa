import PageContent from "@/components/layout/main/content/PageContent";
import TextListSection from "@/layout/text-section/TextListSection";
import UserHomeViewDTO from "@/modules/user/presentation/view/builders/home/dto";

interface UserHomeViewProps extends UserHomeViewDTO { }

const UserHomeView: React.FC<UserHomeViewProps> = ({ ...list }) => (
  <PageContent>
    <TextListSection {...list} />
  </PageContent>
);

export default UserHomeView;