import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";
import Link from "next/link";

export interface CardItemTitleProps extends Pick<CardItemDTO, "href" | "title" | "subtitle"> { }

const CardItemTitle: React.FC<CardItemTitleProps> = ({ href, title, subtitle }) => {
    return (
        <div className="py-2 space-y-2">
            <Text size="xs" weight="bold" transform="uppercase" t={subtitle} />
            <Link href={href || ""} className="group">
                <Title size="sm" t={title} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </Link>
        </div>
    );
};

export default CardItemTitle;