import Card from "@/molecules/card/Card";
import CardActions from "@/molecules/card/CardActions";
import CardHeader from "@/molecules/card/CardHeader";
import CardDTO, { BadgePosition } from "@/presentation/view/dto/molecules/card";
import VerticalCardBadges from "./VerticalCardBadges";
import VerticalCardContent from "./VerticalCardContent";
import VerticalCardImage from "./VerticalCardImage";
import VerticalCardTitle from "./VerticalCardTitle";

interface VerticalCardProps extends CardDTO { }

const VerticalCard: React.FC<VerticalCardProps> = ({ href, title, subtitle, content, img, badges, actions }) => (
    <Card hover className="group relative flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-100/5 bg-gradient-to-b from-white/60 to-white/90 dark:from-secondary-950/60 dark:to-secondary-950/90 border-white/40 dark:border-secondary-800/50 backdrop-blur-xl">
        {badges?.[BadgePosition.TOP_RIGHT] && (
            <VerticalCardBadges badges={badges[BadgePosition.TOP_RIGHT]} className="absolute top-4 right-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_LEFT] && (
            <VerticalCardBadges badges={badges[BadgePosition.BOTTOM_LEFT]} className="absolute bottom-4 left-4 z-10" />
        )}
        {badges?.[BadgePosition.BOTTOM_RIGHT] && (
            <VerticalCardBadges badges={badges[BadgePosition.BOTTOM_RIGHT]} className="absolute bottom-4 right-4 z-10" />
        )}

        <VerticalCardImage img={img} title={title} />

        <CardHeader className="py-4 px-5">
            <div className="flex flex-col items-start w-full">
                {badges?.[BadgePosition.TOP_LEFT] && (
                    <VerticalCardBadges badges={badges[BadgePosition.TOP_LEFT]} className="pt-1 pb-2" />
                )}
                <VerticalCardTitle href={href} title={title} subtitle={subtitle} />
            </div>
        </CardHeader>

        <VerticalCardContent content={content} />

        <div className="mt-auto">
            <CardActions actions={actions} />
        </div>
    </Card>
);

export default VerticalCard;
