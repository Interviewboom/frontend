import { QuestionType } from "../../../api/apiTypes";

export interface TestResponseModel {
    id: number;
    title: string;
    questions: QuestionType[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
}
