import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { FallbackProps } from "@/components/ui/layout/fallback/Fallback";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";
import CardItem from "./item/CardItem";

export interface CardListSectionProps extends CardListSectionDTO {
  fallback?: FallbackProps;
}

const CardListSection: React.FC<CardListSectionProps> = ({ title, subtitle, items, fallback, grid = "gap-4" }) => (
  <div className="py-4 px-4 mx-auto xl:p-6 animate-slide-in-left xl:animate-slide-in-bottom">
    <div className="mx-auto rounded-md space-y-4">
      <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800 space-y-2">
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

export default CardListSection;