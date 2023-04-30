import { QuestionModel } from "src/models/entities/question/question";

export interface SessionNextQuestionResponseModel {
    question: QuestionModel;
    count: number;
    test_id: number;
    countAnswered: number;
}
