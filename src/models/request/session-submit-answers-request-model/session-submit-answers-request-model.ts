export interface SessionSubmitAnswersRequestModel {
    sessionId: string;
    params: {
        questionId: number;
        answerIds: number[] | string[];
    };
}
