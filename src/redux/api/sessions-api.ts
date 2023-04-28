import { api } from "src/redux/api";
import { Session } from "src/models/entities/session/Session";
import { SessionNextQuestionResponseModel } from "src/models/response/session-next-question-response-model/session-next-question-response-model";
import { TestResultsResponseModel } from "src/models/response/test-results-response-model/test-results-response-model";

export interface SessionSubmitAnswersRequest {
    sessionId: string;
    params: {
        questionId: number;
        answerIds: number[] | string[];
    };
}

export const sessionsApi = api.injectEndpoints({
    endpoints: build => ({
        createSession: build.mutation<Session, { testId: string | number }>({
            query: params => {
                return {
                    url: "sessions",
                    method: "POST",
                    body: params,
                };
            },
        }),
        submitSessionAnswers: build.mutation<Session, SessionSubmitAnswersRequest>({
            query: ({ sessionId, params }) => {
                return {
                    url: `sessions/${sessionId}`,
                    method: "POST",
                    body: params,
                };
            },
        }),
        getNextSessionQuestion: build.query<SessionNextQuestionResponseModel, { sessionId: string }>({
            query: ({ sessionId }) => {
                return {
                    url: `sessions/${sessionId}/next-question`,
                };
            },
        }),
        getTestResults: build.query<TestResultsResponseModel, { sessionId: string }>({
            query: ({ sessionId }) => {
                return {
                    url: `sessions/${sessionId}`,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const { useCreateSessionMutation, useSubmitSessionAnswersMutation } = sessionsApi;

// export endpoints for use in SSR
export const { getNextSessionQuestion, getTestResults } = sessionsApi.endpoints;
