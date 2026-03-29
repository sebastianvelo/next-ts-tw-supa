import LanguageSelector from "@/components/layout/navbar/actions/LanguageSelector";
import Avatar from "@/atoms/avatar/Avatar";
import Button from "@/atoms/button/Button";
import Text from "@/atoms/text/Text";
import Card from "@/molecules/card/Card";
import CardFooter from "@/molecules/card/CardFooter";
import CardBody from "@/molecules/card/CardBody";
import CardHeader from "@/molecules/card/CardHeader";
import Dropdown from "@/molecules/dropdown/Dropdown";
import User from "@/modules/user/domain/model";
import I18n from "@/locales/I18nKeys";
import ROUTES from "@/routes/client";
import Link from "next/link";
import ThemeSelector from "../actions/ThemeSelector";

interface UserMenuProps {
    user: User;
    logout: () => Promise<void>;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, logout }) => (
    <Dropdown>
        <Avatar src={user.avatar} />
        <Card className="w-64 h-full backdrop-blur-md">
            <CardHeader className="flex space-x-4 items-center">
                <Avatar src={user.avatar} size="lg" />
                <div>
                    <Link href={ROUTES.USER.ROOT}>
                        <Text weight="bold">{user.name}</Text>
                    </Link>
                    <Text size="xs">{user.email}</Text>
                </div>
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

export default UserMenu;