import QuestionType from "@/modules/question/domain/model/enum/question-type";
import CheckboxGroup from "./checkbox/CheckboxGroup";
import FillInTheBlanks from "./fill-in-the-blanks/FillInTheBlanks";
import MatchWithArrows from "./match-with-arrows/MatchWithArrows";
import RadioGroup from "./radio/RadioGroup";
import TextareaSection from "./textarea/TextareaSection";

const QUESTION_COMPONENTS = {
    [QuestionType.MULTIPLE_CHOICE]: RadioGroup,
    [QuestionType.MULTISELECT]: CheckboxGroup,
    [QuestionType.FREE_TEXT]: TextareaSection,
    [QuestionType.MATCHING_ARROWS]: MatchWithArrows,
    [QuestionType.FILL_IN_THE_BLANKS]: FillInTheBlanks,
};

export default QUESTION_COMPONENTS;