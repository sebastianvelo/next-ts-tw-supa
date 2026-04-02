"use client"
import useAuth from "@/hooks/auth/useAuth";
import useFetchViewWithId from "@/hooks/view/useFetchViewWithId";
import EmptySection from "@/molecules/section/empty-section/EmptySection";
import UserHomeLayoutDTO from "@/modules/user/presentation/view/builders/layout/dto";
import Loading from "@/molecules/loading/Loading";
import API from "@/routes/api";
import ROUTES from "@/routes/view";
import UserHomeLayout from "@/view/user/UserHomeLayout";

const UserHomeLayoutPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const { props, isLoading, error } = useFetchViewWithId<UserHomeLayoutDTO>({
    route: API.USERS.BY_ID,
    redirectOnError: true,
    fallbackPath: () => ROUTES.LOGIN,
    forcedId: user?.id
  });

  if (error) {
    if (user?.authId)
      return (
        <EmptySection subtitle={`Si estas viendo esto, es porque necesitas entrar a @/mock/generated/user.json y modificar el authId del primer usuario por ${user.authId}`} />
      );
    return null;
  }

  return (
    <Loading isLoading={isLoading} error={error}>
      {props && (
        <UserHomeLayout {...props}>
          {children}
        </UserHomeLayout>
      )}
    </Loading>
  );
};

export default UserHomeLayoutPage;