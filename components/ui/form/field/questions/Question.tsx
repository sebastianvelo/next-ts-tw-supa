import Text from "@/components/ui/atoms/text/Text";
import Card from "@/components/ui/molecules/card/Card";
import CardBody from "@/components/ui/molecules/card/CardBody";
import CardHeader from "@/components/ui/molecules/card/CardHeader";
import CheckboxGroup from "@/components/ui/molecules/input/CheckboxGroup";
import RadioGroup from "@/components/ui/molecules/input/RadioGroup";
import TextareaSection from "@/components/ui/molecules/input/TextareaSection";
import QuestionDTO from "@/core/view/DTO/form/question";
import QuestionType from "@/lib/question/model/enum/question-type";

const QUESTION_COMPONENTS = {
  [QuestionType.MULTIPLE_CHOICE]: RadioGroup,
  [QuestionType.MULTISELECT]: CheckboxGroup,
  [QuestionType.FREE_TEXT]: TextareaSection,
};

export interface QuestionProps extends QuestionDTO<QuestionType> {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
}

const Question: React.FC<QuestionProps> = ({ id, prompt, options, type, value, onChange }) => {
  const QuestionComponent = type ? QUESTION_COMPONENTS[type] : null;

  return (
    <Card className="animate-slide-in-left xl:animate-slide-in-bottom">
      <CardHeader>
        <Text weight="bold" size="lg">{prompt}</Text>
      </CardHeader>
      <CardBody>
        {QuestionComponent ? (
          <QuestionComponent
            id={id}
            options={options}
            value={value as any}
            onChange={onChange as any}
          />
        ) : (
          <Text>Tipo de pregunta no soportado</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default Question;
