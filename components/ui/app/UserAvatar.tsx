
interface UserAvatarProps {
    src?: string;
    size?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, size = "w-9 h-9" }) => {
    return (
        <div className={`${size} bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full p-1 border border-black/20 dark:border-white/10`}>
            <img src={src || "https://api.dicebear.com/9.x/bottts/svg?seed=undefined"} alt={"Avatar"} />
        </div>
    );
};

export default UserAvatar;