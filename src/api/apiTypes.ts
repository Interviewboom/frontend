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
    test_id?: number;
    question: string;
    level?: number;
    is_multiselect?: boolean;
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
