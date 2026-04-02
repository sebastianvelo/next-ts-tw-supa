import ListViewDTO from "@/presentation/view/dto/templates/list-view";
import useAuth from "../auth/useAuth";
import useFetchCurrentListView from "./useFetchCurrentListView";

const useFetchCurrentUserListView = <T extends ListViewDTO<T["list"]>>() => {
    const { user } = useAuth();
    const { isLoading, error, data } = useFetchCurrentListView<T>(user?.id);

    return {
        isLoading,
        error,
        data,
    };
};

export default useFetchCurrentUserListView;