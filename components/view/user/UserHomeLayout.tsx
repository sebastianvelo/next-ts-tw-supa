import PageLayout from "@/components/layout/main/PageLayout";
import UserHomeLayoutDTO from "@/modules/user/presentation/view/builders/layout/dto";

interface UserHomeLayoutProps extends UserHomeLayoutDTO, React.PropsWithChildren { }

const UserHomeLayout: React.FC<UserHomeLayoutProps> = (props) => (
  <PageLayout {...props} />
);

export default UserHomeLayout;