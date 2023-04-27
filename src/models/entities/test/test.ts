import { Question } from "src/models/entities/question/question";

export interface Test {
    id: number;
    title: string;
    questions: Question[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
}
