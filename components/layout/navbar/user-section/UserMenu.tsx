import LanguageSelector from "@/components/layout/navbar/actions/LanguageSelector";
import UserAvatar from "@/components/ui/app/UserAvatar";
import Button from "@/components/ui/atoms/button/Button";
import Text from "@/components/ui/atoms/text/Text";
import Card, { CardBody, CardFooter, CardHeader } from "@/components/ui/molecules/card/Card";
import Dropdown from "@/components/ui/molecules/dropdown/Dropdown";
import User from "@/lib/user/model";
import I18n from "@/locales/I18nKeys";
import ROUTES from "@/routes/client/routes";
import Link from "next/link";
import ThemeSelector from "../actions/ThemeSelector";

interface UserMenuProps {
    user: User;
    logout: () => Promise<void>;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, logout }) => {
    return (
        <Dropdown>
            <UserAvatar src={user.avatar} />
            <Card className="w-64 h-full backdrop-blur-md">
                <CardHeader>
                    <Link href={ROUTES.USER.ROOT}>
                        <Text weight="bold">{user.name}</Text>
                    </Link>
                    <Text size="xs">{user.email}</Text>
                </CardHeader>
                <CardBody className="space-y-4">
                    <LanguageSelector />
                    <ThemeSelector />
                </CardBody>
                <CardFooter className="flex flex-col items-center justify-center">
                    <Button size="sm" onClick={logout} variant="danger" t={I18n.NAVBAR.SIGN_OUT} />
                </CardFooter>
            </Card>
        </Dropdown>
    );
};

export default UserMenu;