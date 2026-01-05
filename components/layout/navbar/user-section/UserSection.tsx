import useAuth from "@/hooks/auth/useAuth";
import LoginButton from "./LoginButton";
import UserMenu from "./UserMenu";

const UserSection: React.FC = () => {
    const { user, isLoading, logout } = useAuth();

    if (isLoading) {
        return (
            <div className="w-6 h-6 animate-ping bg-primary-200 dark:bg-primary-700 rounded-full" />
        );
    }

    return user ? <UserMenu user={user} logout={logout} /> : <LoginButton />;
};

export default UserSection;