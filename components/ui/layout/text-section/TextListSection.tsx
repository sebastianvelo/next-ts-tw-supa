import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { TextListSectionDTO } from "@/core/view/DTO/list-section/text-section";

interface TextListSectionProps extends TextListSectionDTO { }

const TextListSection: React.FC<TextListSectionProps> = ({ title, subtitle, items, grid }) => (
    <div className="py-4 px-4 mx-auto xl:px-8">
        <div className="mx-auto rounded-md space-y-6">
            <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
                <Title t={title} size="xl" />
                <Text t={subtitle} />
            </div>
            <div className={`grid gap-2 ${grid}`}>
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