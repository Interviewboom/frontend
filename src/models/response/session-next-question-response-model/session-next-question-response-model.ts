import { Question } from "src/models/entities/question/question";

export interface SessionNextQuestionResponseModel {
    question: Question;
    count: number;
    test_id: number;
    countAnswered: number;
}
