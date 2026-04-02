import Card from "@/molecules/card/Card";
import CardActions from "@/molecules/card/CardActions";
import CardHeader from "@/molecules/card/CardHeader";
import CardDTO, { BadgePosition } from "@/presentation/view/models/molecules/card/dto";
import HorizontalCardBadges from "./HorizontalCardBadges";
import HorizontalCardContent from "./HorizontalCardContent";
import HorizontalCardImage from "./HorizontalCardImage";
import HorizontalCardTitle from "./HorizontalCardTitle";

interface HorizontalCardProps extends CardDTO { }

const HorizontalCard: React.FC<HorizontalCardProps> = ({ href, title, subtitle, content, img, badges, actions }) => (
    <Card hover className="group relative flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-100/5 bg-gradient-to-b from-white/60 to-white/90 dark:from-secondary-950/60 dark:to-secondary-950/90 border-white/40 dark:border-secondary-800/50 backdrop-blur-xl">
        {badges?.[BadgePosition.TOP_RIGHT] && (
            <HorizontalCardBadges badges={badges[BadgePosition.TOP_RIGHT]} className="absolute top-4 right-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_LEFT] && (
            <HorizontalCardBadges badges={badges[BadgePosition.BOTTOM_LEFT]} className="absolute bottom-4 left-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_RIGHT] && (
            <HorizontalCardBadges badges={badges[BadgePosition.BOTTOM_RIGHT]} className="absolute bottom-4 right-4 z-10" />
        )}
        <CardHeader className="py-4 px-5">
            <div className="flex items-start gap-4">
                <HorizontalCardImage img={img} title={title} />
                <div className="flex flex-col justify-between items-start w-full">
                    {badges?.[BadgePosition.TOP_LEFT] && (
                        <HorizontalCardBadges badges={badges[BadgePosition.TOP_LEFT]} className="pt-1 pb-2" />
                    )}
                    <HorizontalCardTitle href={href} title={title} subtitle={subtitle} />
                </div>
            </div>
        </CardHeader>
        <HorizontalCardContent content={content} />
        <CardActions actions={actions} />
    </Card>
);

export default HorizontalCard;