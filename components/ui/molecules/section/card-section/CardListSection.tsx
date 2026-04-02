import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import { TitleSize } from "@/atoms/title/types";
import { FallbackProps } from "@/molecules/section/fallback/Fallback";
import HorizontalCard from "@/molecules/card/horizontal/HorizontalCard";
import MiniCard from "@/molecules/card/mini/MiniCard";
import VerticalCard from "@/molecules/card/vertical/VerticalCard";
import CardListSectionDTO from "@/presentation/view/models/molecules/section/card-list-section";
import { CardType } from "./types";

const CardMap = {
  [CardType.VERTICAL]: VerticalCard,
  [CardType.HORIZONTAL]: HorizontalCard,
  [CardType.MINI]: MiniCard,
};

export interface CardListSectionProps extends CardListSectionDTO {
  className?: string;
  fallback?: FallbackProps;
  type?: CardType;
  titleSize?: TitleSize;
}

const CardListSection: React.FC<CardListSectionProps> = ({ className, title, subtitle, items, fallback, type = CardType.HORIZONTAL, titleSize = "xl" }) => {
  const Card = CardMap[type];

  return (
    <div className="p-4 xl:p-6 mx-auto animate-slide-in-bottom">
      <div className="mx-auto rounded-md space-y-4">
        <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800 space-y-2">
          <Title t={title} size={titleSize} />
          <Text t={subtitle} size="lg" weight="semibold" />
        </div>
        <div className={`grid gap-4 ${className}`}>
          {items?.map((card) => (
            <Card key={card.href} {...card} />
          ))}
        </div>
        {fallback?.condition && fallback.FallbackContent && (
          <div className="mx-auto">
            <fallback.FallbackContent />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardListSection;