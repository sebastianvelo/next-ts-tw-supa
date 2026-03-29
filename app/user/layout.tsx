"use client"
import useAuth from "@/hooks/auth/useAuth";
import useFetchViewWithId from "@/hooks/view/useFetchViewWithId";
import EmptySection from "@/layout/empty-section/EmptySection";
import UserLayoutViewDTO from "@/modules/user/presentation/view/builders/layout/dto";
import Loading from "@/molecules/loading/Loading";
import API from "@/routes/api";
import ROUTES from "@/routes/client";
import UserLayoutView from "@/view/user/UserLayoutView";

const UserPageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useAuth();
  const { props, isLoading, error } = useFetchViewWithId<UserLayoutViewDTO>({
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
        <UserLayoutView {...props}>
          {children}
        </UserLayoutView>
      )}
    </Loading>
  );
};

export default UserPageLayout;