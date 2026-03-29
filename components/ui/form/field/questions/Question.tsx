import Text from "@/atoms/text/Text";
import QuestionType from "@/modules/question/domain/model/enum/question-type";
import CardBody from "@/molecules/card/CardBody";
import QUESTION_COMPONENTS from "@/molecules/question/QuestionComponent";
import QuestionDTO from "@/presentation/view/dto/form/question";

export interface QuestionProps extends QuestionDTO<QuestionType> {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
}

const Question: React.FC<QuestionProps> = ({ id, prompt, options, type, value, onChange }) => {
  const QuestionComponent = type ? QUESTION_COMPONENTS[type] : null;

  return (
    <div className="animate-slide-in-bottom">
      <Text weight="bold" size="lg">{prompt}</Text>
      <CardBody>
        {QuestionComponent ? (
          <QuestionComponent
            id={id}
            prompt={prompt}
            options={options}
            value={value as any}
            onChange={onChange as any}
          />
        ) : (
          <Text>Tipo de pregunta no soportado</Text>
        )}
      </CardBody>
    </div>
  );
};

export default Question;
