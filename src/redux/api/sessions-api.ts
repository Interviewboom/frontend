import { api } from "src/redux/api";
import { SessionCreationResponseModel } from "src/models/response/session-creation-response-model/session-creation-response-model";
import { SessionCreationRequestModel } from "src/models/request/session-creation-request-model/session-creation-request-model";

const url = "sessions";

export const sessionsApi = api.injectEndpoints({
    endpoints: build => ({
        createSession: build.mutation<SessionCreationResponseModel, SessionCreationRequestModel>({
            query: params => {
                return {
                    url,
                    method: "POST",
                    body: params,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const { useCreateSessionMutation } = sessionsApi;

// export endpoints for use in SSR
export const { createSession } = sessionsApi.endpoints;
