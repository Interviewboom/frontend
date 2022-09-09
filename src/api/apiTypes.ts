export type TestCategory = {
    id: number;
    name: string;
    parent_id: number;
    title: string;
    parent: string | null;
};

export type QuestionType = {
    id: number;
    title?: string;
    test_id: number;
    question: string;
    level?: number;
    is_multiselect: boolean;
};

export type TestType = {
    id: number;
    title: string;
    questions: QuestionType[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
};

export type answerType = {
    id: number;
    question_id: 1;
    answer: string;
    is_correct: boolean;
};

export type TestFlowType = {
    id: string;
    test_id: number;
    status: string;
};

export type questionAllDataType = { question: QuestionType; count: number; test_id: number; countAnswered: number };

export type TestFlowData = {
    testId: number;
};

export type SendAnswersData = {
    questionId: number;
    answerIds: number[] | string[];
};

export type SessionQuestion = {
    question_id: number;
    is_answered: boolean;
    question: string;
};

export type TestResultsType = {
    sessionAnswers: { answer_id: number; is_correct: boolean }[];
    sessionQuestions: SessionQuestion[];
    test_id: number;
    test: string;
};
