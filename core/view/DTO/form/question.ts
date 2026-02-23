interface QuestionDTO<T> {
    id: string;
    prompt?: string;
    options?: string[];
    type?: T;
}

export default QuestionDTO;
