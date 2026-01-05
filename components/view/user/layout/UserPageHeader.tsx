import UserAvatar from "@/components/ui/app/UserAvatar";
import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { UserPageHeaderDTO } from "@/lib/user/view/builders/layout/dto";

interface UserPageHeaderProps extends UserPageHeaderDTO { }

const UserPageHeader: React.FC<UserPageHeaderProps> = ({ image, title, subtitle }) => (
  <div className="p-6 bg-gradient-to-t from-white/40 via-white/30 to-white/20 dark:from-black/70 dark:via-black/60 dark:to-black/90 backdrop-blur-xl border-b border-secondary-200/50 dark:border-secondary-800/50 shadow-sm">
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:justify-center sm:space-x-8">
      <UserAvatar size="w-24 h-24" src={image!} />
      <div className="space-y-2">
        <Title className="text-center">{title}</Title>
        <Text align="center">{subtitle}</Text>
      </div>
    </div>
  </div>
);

export default UserPageHeader;