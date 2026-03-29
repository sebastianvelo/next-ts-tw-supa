import PageLayoutView from "@/components/layout/main/PageLayoutView";
import UserLayoutViewDTO from "@/modules/user/presentation/view/builders/layout/dto";

interface UserLayoutViewProps extends UserLayoutViewDTO, React.PropsWithChildren { }

const UserLayoutView: React.FC<UserLayoutViewProps> = (props) => (
  <PageLayoutView {...props} />
);

export default UserLayoutView;