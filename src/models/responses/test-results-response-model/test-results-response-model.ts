import { SessionQuestion } from "src/models/entities/session-question/session-question";

export interface TestResultsResponseModel {
    sessionAnswers: { answer_id: number; is_correct: boolean }[];
    sessionQuestions: SessionQuestion[];
    test_id: number;
    test: string;
}
