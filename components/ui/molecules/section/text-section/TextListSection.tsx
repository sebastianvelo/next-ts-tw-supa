import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import TextListSectionDTO from "@/presentation/view/dto/molecules/section/text-section";

interface TextListSectionProps extends TextListSectionDTO {
    className?: string;
}

const TextListSection: React.FC<TextListSectionProps> = ({ title, subtitle, items, className }) => (
    <div className="py-4 px-4 mx-auto xl:p-6 animate-slide-in-bottom">
        <div className="mx-auto rounded-md space-y-6">
            <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
                <Title t={title} size="xl" />
                <Text t={subtitle} />
            </div>
            <div className={`grid gap-4 ${className}`}>
                {items?.map((item, i) => (
                    <div key={`ts-${i}`} className="space-y-3">
                        <Title t={item.subtitle} size="md" />
                        <Text>
                            {item.content}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default TextListSection;