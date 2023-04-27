/**
 * @deprecated, use TestCategory instead;
 */
export type TestCategory = {
    id: number;
    name: string;
    parent_id: number;
    title: string;
    parent: string | null;
};
/**
 * @deprecated, use Question instead;
 */
export type QuestionType = {
    id: number;
    title?: string;
    test_id: number;
    question: string;
    level?: number;
    is_multiselect: boolean;
};
/**
 * @deprecated, use Test instead;
 */
export type TestType = {
    id: number;
    title: string;
    questions: QuestionType[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
};
/**
 * @deprecated, use Answer instead;
 */
export type answerType = {
    id: number;
    question_id: 1;
    answer: string;
    is_correct: boolean;
};
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
