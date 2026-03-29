"use client"
import Button from "@/atoms/button/Button";
import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import Card from "@/molecules/card/Card";
import CardBody from "@/molecules/card/CardBody";
import CardFooter from "@/molecules/card/CardFooter";
import CardHeader from "@/molecules/card/CardHeader";
import useI18N from "@/hooks/lang/useI18N";
import I18n from "@/locales/I18nKeys";
import ROUTES from "@/routes/client";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

interface EmptySectionProps {
    title?: string;
    subtitle?: string | null;
}

const EmptySection: React.FC<EmptySectionProps> = ({ title, subtitle }) => {
    const { t } = useI18N();

    return (
        <Card className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto">
            <CardHeader className="w-full flex justify-center">
                <div className=" rounded-lg p-2">
                    <FileQuestion className="h-16 w-16 text-danger-600 dark:text-danger-500" />
                </div>
            </CardHeader>
            <CardBody className="flex flex-col space-y-4 items-center">
                <Title size="2xl">{t(title)}</Title>
                <Text weight="bold" align="center">{t(subtitle)}</Text>
            </CardBody>
            <CardFooter className="w-full flex justify-center items-center">
                <Link href={ROUTES.USER.ROOT}>
                    <Button variant="primary">{t(I18n.COMMON.HOME_BUTTON)}</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default EmptySection;