import Text from "@/components/ui/atoms/text/Text";
import { CardBody } from "@/components/ui/molecules/card/Card";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";

export interface CardItemContentProps extends Pick<CardItemDTO, "content"> { }

const CardItemContent: React.FC<CardItemContentProps> = ({ content }) => {
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

export default CardItemContent;