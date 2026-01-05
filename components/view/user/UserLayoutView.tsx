import PageNavigator from "@/components/layout/main/PageNavigator";
import UserPageHeader from "@/components/view/user/layout/UserPageHeader";
import UserLayoutViewDTO from "@/lib/user/view/builders/layout/dto";

interface UserLayoutViewProps extends UserLayoutViewDTO, React.PropsWithChildren { }

const UserLayoutView: React.FC<UserLayoutViewProps> = ({ header, tabs, children }) => {
  return (
    <div>
      <UserPageHeader {...header} />
      <PageNavigator tabs={tabs}>
        {children}
      </PageNavigator>
    </div>
  );
};

export default UserLayoutView;