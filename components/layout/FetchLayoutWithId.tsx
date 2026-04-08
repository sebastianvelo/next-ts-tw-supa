"use client";

import React from "react";
import useFetchViewWithId from "@/hooks/view/useFetchViewWithId";
import Loading from "@/molecules/loading/Loading";
import PageLayout from "@/components/layout/main/PageLayout";
import LayoutDTO from "@/presentation/view/models/main/layout";

type FetchLayoutWithIdProps = React.PropsWithChildren<{
  route: (id: string) => string;
}>;

function FetchLayoutWithId({ route, children }: FetchLayoutWithIdProps) {
  const { props, isLoading, error } = useFetchViewWithId<LayoutDTO>({
    route,
    redirectOnError: true,
  });

  if (error) return null;

  return (
    <Loading isLoading={isLoading}>
      {props ? <PageLayout {...props}>{children}</PageLayout> : null}
    </Loading>
  );
}

export default FetchLayoutWithId;
