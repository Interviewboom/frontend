import { SessionQuestionModel } from "src/models/entities/session-question-model/session-question-model";

export interface TestResultsResponseModel {
    sessionAnswers: { answer_id: number; is_correct: boolean }[];
    sessionQuestions: SessionQuestionModel[];
    test_id: number;
    test: string;
}
