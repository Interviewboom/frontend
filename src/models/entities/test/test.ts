import { QuestionModel } from "src/models/entities/question-model/question-model";

export interface Test {
    id: number;
    title: string;
    questions: QuestionModel[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
}
