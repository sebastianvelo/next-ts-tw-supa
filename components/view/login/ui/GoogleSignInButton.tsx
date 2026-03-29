import Button from "@/atoms/button/Button";
import GoogleIcon from "@/components/ui/icons/GoogleIcon";
import I18n from "@/locales/I18nKeys";
import useI18N from "@/hooks/lang/useI18N";
import useOAuthSignIn from "@/hooks/auth/useOAuthSignIn";

const GoogleSignInButton: React.FC = () => {
    const { t } = useI18N();
    const { handleSignIn } = useOAuthSignIn({ provider: "google" });

    return (
        <div className="space-y-4 animate-slide-in-bottom">
            <Button className="w-full flex items-center justify-center space-x-3" size="lg" onClick={handleSignIn}>
                <GoogleIcon />
                <span>{t(I18n.LOGIN.PROVIDERS.GOOGLE)}</span>
            </Button>
        </div>
    );
};

export default GoogleSignInButton;