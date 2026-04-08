"use client";

import useFetchCurrentListView from "@/hooks/view/useFetchCurrentListView";
import ListViewDTO from "@/presentation/view/models/templates/list-view";
import { PageListViewConfig } from "@/templates/list/types";
import React from "react";

interface FetchListViewProps<T extends ListViewDTO<T["list"]>> {
  ListView: React.ComponentType<any>;
  config?: PageListViewConfig;
}

function FetchListView<T extends ListViewDTO<T["list"]>>({ ListView, config }: Readonly<FetchListViewProps<T>>) {
  const { data, isLoading, error } = useFetchCurrentListView<T>();

  if (error) return null;

  return <ListView isLoading={isLoading} config={config} {...data} />;
}

export default FetchListView;
