import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";
import CardItem from "./item/CardItem";

interface CardSectionBodyFallback {
  condition?: boolean;
  FallbackContent: React.FC<any>;
}

export interface CardListSectionProps extends CardListSectionDTO {
  fallback?: CardSectionBodyFallback;
}

const CardListSection: React.FC<CardListSectionProps> = ({ title, subtitle, items, fallback, grid = "gap-4" }) => {
  return (
    <div className="py-4 px-4 mx-auto xl:p-6 animate-slide-in-left xl:animate-slide-in-bottom">
      <div className="mx-auto rounded-md space-y-4">
        <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
          <Title t={title} size="xl" />
          <Text t={subtitle} />
        </div>
        <div className={`grid ${grid}`}>
          {items?.map((card) => (
            <CardItem key={card.href} {...card} />
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