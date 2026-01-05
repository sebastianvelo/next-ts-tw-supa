"use client"
import Loading from "@/components/ui/molecules/loading/Loading";
import UserHomeView from "@/components/view/user/home/UserHomeView";
import useFetchCurrentUserView from "@/hooks/view/useFetchCurrentUserView";
import UserHomeViewDTO from "@/lib/user/view/builders/home/dto";

const UserHomePage: React.FC = () => {
  const { props, isLoading, error } = useFetchCurrentUserView<UserHomeViewDTO>();

  if (error) return null;

  return (
    <Loading isLoading={isLoading} error={error}>
      {props && (
        <UserHomeView {...props} />
      )}
    </Loading>
  )
};
export default UserHomePage;