"use client";

import React from "react";
import Loading from "@/molecules/loading/Loading";
import useFetchCurrentView from "@/hooks/view/useFetchCurrentView";

interface FetchCurrentViewProps<T> {
  View: React.ComponentType<T>;
}

function FetchCurrentView<T extends object>({ View }: Readonly<FetchCurrentViewProps<T>>) {
  const { props, isLoading, error } = useFetchCurrentView<T>();

  return (
    <Loading isLoading={isLoading} error={error}>
      {props && <View {...props} />}
    </Loading>
  );
}

export default FetchCurrentView;
