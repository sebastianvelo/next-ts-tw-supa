import Card, { CardHeader } from "@/components/ui/molecules/card/Card";
import { CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";
import CardItemBadges from "./CardItemBadges";
import CardItemContent from "./CardItemContent";
import CardItemImage from "./CardItemImage";
import CardItemTitle from "./CardItemTitle";

export interface CardItemProps extends CardItemDTO { }

const CardItem: React.FC<CardItemProps> = ({ href, title, subtitle, content, img, badges }) => {
    return (
        <Card hover className="transition-all duration-300 hover:shadow-md hover:shadow-primary-500/30 dark:hover:shadow-primary-100/10">
            <CardHeader className="py-3 px-4">
                <div className="flex items-start gap-4">
                    <CardItemImage img={img} title={title} />
                    <div className="flex flex-col-reverse justify-between items-start w-full">
                        <CardItemTitle href={href} title={title} subtitle={subtitle} />
                        <CardItemBadges badges={badges} />
                    </div>
                </div>
            </CardHeader>
            <CardItemContent content={content} />
        </Card>
    );
};

export default CardItem;