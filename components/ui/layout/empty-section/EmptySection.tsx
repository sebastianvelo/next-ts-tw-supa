import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import Card from "@/components/ui/molecules/card/Card";
import CardBody from "@/components/ui/molecules/card/CardBody";
import CardFooter from "@/components/ui/molecules/card/CardFooter";
import CardHeader from "@/components/ui/molecules/card/CardHeader";
import ROUTES from "@/routes/client/routes";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

interface EmptySectionProps {
    title?: string;
    subtitle?: string | null;
}

const EmptySection: React.FC<EmptySectionProps> = ({ title = "Mmmm", subtitle = "Parece que no hay nada por aqui" }) => { //TODO Replace with i18n keys
    return (
        <Card className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto">
            <CardHeader className="w-full flex justify-center">
                <div className="bg-danger-100 dark:bg-danger-600 rounded-lg p-2">
                    <FileQuestion className="h-16 w-16 text-danger-600 dark:text-danger-100" />
                </div> {/** //TODO HACER MAS GENERICO ESTO => UN TYPE QUE CAMBIE EL ICON */}
            </CardHeader>
            <CardBody className="flex flex-col space-y-4 items-center">
                <Title size="2xl">{title}</Title>
                <Text weight="bold" align="center">{subtitle}</Text>
            </CardBody>
            <CardFooter className="w-full flex justify-center items-center">
                <Link href={ROUTES.USER.ROOT} className="px-4 py-2 text-base font-medium rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-400 text-white hover:bg-primary-500 focus:ring-primary-500 dark:bg-primary-700 dark:text-white dark:hover:bg-primary-800 dark:focus:ring-primary-400">
                    Volver al inicio
                </Link> {/** //TODO PENSAR MAS BOTONES */}
            </CardFooter>
        </Card>
    );
};

export default EmptySection;