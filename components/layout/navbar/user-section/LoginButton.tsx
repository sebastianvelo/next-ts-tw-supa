import Text from "@/components/ui/atoms/text/Text";
import ROUTES from "@/routes/client/routes";
import I18n from "@/locales/I18nKeys";
import Link from "next/link";

const LoginButton: React.FC = () => {
    return (
        <Link href={ROUTES.LOGIN}>
            <Text size="xs" t={I18n.NAVBAR.SIGN_IN}></Text>
        </Link>
    );
};

export default LoginButton;