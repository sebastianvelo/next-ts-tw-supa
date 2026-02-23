import Card from "@/components/ui/molecules/card/Card";
import CardActions from "@/components/ui/molecules/card/CardActions";
import CardHeader from "@/components/ui/molecules/card/CardHeader";
import { BadgePosition, CardItemDTO } from "@/core/view/DTO/list-section/card-list-section";
import CardItemBadges from "./CardItemBadges";
import CardItemContent from "./CardItemContent";
import CardItemImage from "./CardItemImage";
import CardItemTitle from "./CardItemTitle";

export interface CardItemProps extends CardItemDTO { }

const CardItem: React.FC<CardItemProps> = ({ href, title, subtitle, content, img, badges, actions }) => (
    <Card hover className="group relative flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-100/5 bg-gradient-to-b from-white/60 to-white/90 dark:from-secondary-950/60 dark:to-secondary-950/90 border-white/40 dark:border-secondary-800/50 backdrop-blur-xl">
        {badges?.[BadgePosition.TOP_RIGHT] && (
            <CardItemBadges badges={badges[BadgePosition.TOP_RIGHT]} className="absolute top-4 right-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_LEFT] && (
            <CardItemBadges badges={badges[BadgePosition.BOTTOM_LEFT]} className="absolute bottom-4 left-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_RIGHT] && (
            <CardItemBadges badges={badges[BadgePosition.BOTTOM_RIGHT]} className="absolute bottom-4 right-4 z-10" />
        )}
        <CardHeader className="py-4 px-5">
            <div className="flex items-start gap-4">
                <CardItemImage img={img} title={title} />
                <div className="flex flex-col justify-between items-start w-full">
                    {badges?.[BadgePosition.TOP_LEFT] && (
                        <CardItemBadges badges={badges[BadgePosition.TOP_LEFT]} className="pt-1 pb-2" />
                    )}
                    <CardItemTitle href={href} title={title} subtitle={subtitle} />
                </div>
            </div>
        </CardHeader>
        <CardItemContent content={content} />
        <CardActions actions={actions} />
    </Card>
);

export default CardItem;