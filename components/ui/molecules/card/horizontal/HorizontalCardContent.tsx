import Text from "@/atoms/text/Text";
import CardBody from "@/molecules/card/CardBody";
import CardDTO from "@/presentation/view/dto/molecules/card";

interface HorizontalCardContentProps extends Pick<CardDTO, "content"> { }

const HorizontalCardContent: React.FC<HorizontalCardContentProps> = ({ content }) => {
    return (content && (
        <>
            <div className="px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-secondary-200 dark:via-secondary-700 to-transparent" />
            </div>
            <CardBody className="px-6 pb-6 pt-4">
                <Text size="sm" t={content} />
            </CardBody>
        </>
    ));
};

export default HorizontalCardContent;