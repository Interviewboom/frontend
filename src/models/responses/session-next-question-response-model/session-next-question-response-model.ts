import { QuestionModel } from "src/models/entities/question-model/question-model";

export interface SessionNextQuestionResponseModel {
    question: QuestionModel;
    count: number;
    test_id: number;
    countAnswered: number;
}
