import { api } from "src/redux/api";
import { SessionCreateResponseModel } from "src/models/response/session-create-response-model/session-create-response-model";
import { SessionCreateRequestModel } from "src/models/request/session-create-request-model/session-create-request-model";
import { SessionSubmitAnswersRequestModel } from "src/models/request/session-submit-answers-request-model/session-submit-answers-request-model";
import { SessionSubmitAnswersResponseModel } from "src/models/response/session-submit-answers-response-model/session-submit-answers-response-model";

const url = "sessions";

export const sessionsApi = api.injectEndpoints({
    endpoints: build => ({
        createSession: build.mutation<SessionCreateResponseModel, SessionCreateRequestModel>({
            query: params => {
                return {
                    url,
                    method: "POST",
                    body: params,
                };
            },
        }),
        submitSessionAnswers: build.mutation<SessionSubmitAnswersResponseModel, SessionSubmitAnswersRequestModel>({
            query: ({ sessionId, params }) => {
                return {
                    url: `${url}/${sessionId}`,
                    method: "POST",
                    body: params,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const { useCreateSessionMutation, useSubmitSessionAnswersMutation } = sessionsApi;

// export endpoints for use in SSR
export const { createSession } = sessionsApi.endpoints;
