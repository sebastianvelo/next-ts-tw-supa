"use client"
import Loading from "@/molecules/loading/Loading";
import UserHomeView from "@/view/user/home/UserHomeView";
import useFetchCurrentUserView from "@/hooks/view/useFetchCurrentUserView";
import UserHomeViewDTO from "@/modules/user/presentation/view/builders/home/dto";

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