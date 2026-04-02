import Avatar from "@/atoms/avatar/Avatar";
import Text from "@/atoms/text/Text";
import I18n from "@/locales/I18nKeys";
import Card from "@/molecules/card/Card";
import CardBody from "@/molecules/card/CardBody";
import CardFooter from "@/molecules/card/CardFooter";
import Dropdown from "@/molecules/dropdown/Dropdown";
import ROUTES from "@/routes/view";
import Link from "next/link";
import LanguageSelector from "../actions/LanguageSelector";
import ThemeSelector from "../actions/ThemeSelector";

const LoginMenu: React.FC = () => (
    <Dropdown>
        <Avatar src={"https://api.dicebear.com/9.x/bottts/svg?seed=login"} />
        <Card className="w-64 h-full backdrop-blur-md">
            <CardBody className="space-y-4">
                <LanguageSelector />
                <ThemeSelector />
            </CardBody>
            <CardFooter className="flex flex-col items-center justify-center">
                <Link href={ROUTES.LOGIN}>
                    <Text size="xs" t={I18n.NAVBAR.SIGN_IN}></Text>
                </Link>
            </CardFooter>
        </Card>
    </Dropdown>
);

export default LoginMenu;