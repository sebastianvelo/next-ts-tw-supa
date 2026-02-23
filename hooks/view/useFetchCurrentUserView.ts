import useAuth from "../auth/useAuth";
import { FetchResponse } from "./types";
import useFetchCurrentView from "./useFetchCurrentView";

const useFetchCurrentUserView = <T>(): FetchResponse<T> => {
    const { user } = useAuth();

    return useFetchCurrentView<T>({
        id: user?.id
    });
};

export default useFetchCurrentUserView;