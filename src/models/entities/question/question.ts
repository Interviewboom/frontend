export interface Question {
    id: number;
    title?: string;
    test_id: number;
    question: string;
    level?: number;
    is_multiselect: boolean;
}
