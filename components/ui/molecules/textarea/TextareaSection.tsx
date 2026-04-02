import Textarea from "@/atoms/textarea/Textarea";

interface TextareaSectionProps {
    value?: string;
    onChange: (value: string) => void;
}

const TextareaSection: React.FC<TextareaSectionProps> = ({ value = "", onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <Textarea
            value={value}
            onChange={handleChange}
        />
    );
};

export default TextareaSection;
