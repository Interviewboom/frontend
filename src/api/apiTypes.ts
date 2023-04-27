/**
 * @deprecated
 */
export type SessionQuestion = {
    question_id: number;
    is_answered: boolean;
    question: string;
};
/**
 * @deprecated
 */
export type TestResultsType = {
    sessionAnswers: { answer_id: number; is_correct: boolean }[];
    sessionQuestions: SessionQuestion[];
    test_id: number;
    test: string;
};
