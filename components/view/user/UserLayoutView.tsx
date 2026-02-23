import PageLayoutView from "@/components/layout/main/PageLayoutView";
import UserLayoutViewDTO from "@/lib/user/view/builders/layout/dto";

interface UserLayoutViewProps extends UserLayoutViewDTO, React.PropsWithChildren { }

const UserLayoutView: React.FC<UserLayoutViewProps> = (props) => (
  <PageLayoutView {...props} />
);

export default UserLayoutView;