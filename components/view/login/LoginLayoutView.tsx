"use client"
import Brand from "@/components/ui/app/Brand";
import Text from "@/atoms/text/Text";
import Card from "@/molecules/card/Card";
import CardFooter from "@/molecules/card/CardFooter";
import CardBody from "@/molecules/card/CardBody";
import CardHeader from "@/molecules/card/CardHeader";
import GoogleSignInButton from "@/view/login/ui/GoogleSignInButton";
import I18n from "@/locales/I18nKeys";

const LoginLayoutView: React.FC = () => (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-indigo-100 flex items-baseline justify-center py-8">
        <Card className="max-w-md">
            <CardHeader className="space-y-2 flex flex-col items-center">
                <Brand />
                <Text weight="bold" t={I18n.LOGIN.DESCRIPTION} />
            </CardHeader>
            <CardBody className="space-y-3">
                <GoogleSignInButton />
            </CardBody>
            <CardFooter>
                <Text size="xs" t={I18n.LOGIN.DISCLAIMER} />
            </CardFooter>
        </Card>
    </div>
);

export default LoginLayoutView;