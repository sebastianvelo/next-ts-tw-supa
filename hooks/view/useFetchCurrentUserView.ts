import useAuth from "../auth/useAuth";
import { FetchResponse } from "./types";
import useFetchCurrentView from "./useFetchCurrentView";

const useFetchCurrentUserView = <T>(): FetchResponse<T> => {
    const { user } = useAuth();
    const { props, isLoading, error } = useFetchCurrentView<T>(({
        id: user?.id
    }));

    return {
        props,
        isLoading,
        error,
    };
};

export default useFetchCurrentUserView;