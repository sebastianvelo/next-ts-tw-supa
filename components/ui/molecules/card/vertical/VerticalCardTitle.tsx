import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import CardDTO from "@/presentation/view/dto/molecules/card/dto";
import Link from "next/link";

interface VerticalCardTitleProps extends Pick<CardDTO, "href" | "title" | "subtitle"> { }

const VerticalCardTitle: React.FC<VerticalCardTitleProps> = ({ href, title, subtitle }) => {
    return (
        <div className="py-2 space-y-2 w-full">
            {subtitle && (
                <Text size="xs" weight="bold" transform="uppercase" t={subtitle} />
            )}
            <Link href={href || ""} className="group block w-full">
                <Title size="md" t={title} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2" />
            </Link>
        </div>
    );
};

export default VerticalCardTitle;
