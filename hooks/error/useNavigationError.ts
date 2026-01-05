import NavigationErrorContext, { NavigationErrorContextType } from "@/context/error/NavigationErrorContext";
import { useContext } from "react";

const useNavigationError = (): NavigationErrorContextType => {
    const context = useContext(NavigationErrorContext);
    if (context === undefined) {
        throw new Error("useNavigationError must be used within a ErrorProvider");
    }
    return context;
};

export default useNavigationError;