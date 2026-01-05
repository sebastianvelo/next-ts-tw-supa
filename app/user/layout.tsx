"use client"
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import Loading from "@/components/ui/molecules/loading/Loading";
import UserLayoutView from "@/components/view/user/UserLayoutView";
import useAuth from "@/hooks/auth/useAuth";
import useFetchViewWithId from "@/hooks/view/useFetchViewWithId";
import UserLayoutViewDTO from "@/lib/user/view/builders/layout/dto";
import API from "@/routes/api/routes";
import ROUTES from "@/routes/client/routes";
import { PropsWithChildren } from "react";

const UserPageLayout: React.FC<PropsWithChildren> = ({ children }) => {
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