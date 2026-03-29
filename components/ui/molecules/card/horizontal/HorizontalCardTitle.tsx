import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import CardDTO from "@/presentation/view/dto/molecules/card";
import Link from "next/link";

interface HorizontalCardTitleProps extends Pick<CardDTO, "href" | "title" | "subtitle"> { }

const HorizontalCardTitle: React.FC<HorizontalCardTitleProps> = ({ href, title, subtitle }) => {
    return (
        <div className="py-2 space-y-2">
            <Text size="xs" weight="bold" transform="uppercase" t={subtitle} />
            <Link href={href || ""} className="group">
                <Title size="sm" t={title} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
            </Link>
        </div>
    );
};

export default HorizontalCardTitle;