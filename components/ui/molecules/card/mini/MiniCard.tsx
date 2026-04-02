import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import CardDTO from "@/presentation/view/models/molecules/card/dto";

interface MiniCardProps extends CardDTO { }

const MiniCard: React.FC<MiniCardProps> = ({ title, subtitle }) => (
    <div className="flex flex-col gap-2 p-8 bg-white dark:bg-secondary-900 rounded-lg shadow-sm border border-secondary-200 dark:border-secondary-800">
        <Text
            t={subtitle}
            transform="uppercase"
            weight="bold"
            size="xs"
        />
        <Title
            t={title}
            size="3xl"
        />
    </div>
);

export default MiniCard;