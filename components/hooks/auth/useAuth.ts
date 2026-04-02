import API from "@/routes/api";
import ROUTES from "@/routes/view";
import User from "@/modules/user/domain/model";
import { useEffect, useState } from "react";

interface UseAuthReturn {
    user: User | null;
    error: unknown;
    isLoading: boolean;
    logout: () => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(API.AUTH.ME);
                if (res.ok) {
                    const userData = await res.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            const res = await fetch(API.AUTH.LOGOUT, { method: "POST" });
            if (res.ok) {
                setUser(null);
                window.location.href = ROUTES.LOGIN;
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return { user, error, isLoading, logout };
};

export default useAuth;