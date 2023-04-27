import { handleRequestError } from "@utils/errorHandler";
import api from "./index";

import { answerType, questionAllDataType, SendAnswersData, TestFlowType } from "./apiTypes";
/**
 * @deprecated since RTK-Query start using;
 */
export const getNextQuestion = async (sessionId: string) => {
    try {
        const res = await api.get<questionAllDataType>(`sessions/${sessionId}/next-question`);
        const questionData = res.data;

        return questionData;
    } catch (error) {
        return handleRequestError(error);
    }
};
/**
 * @deprecated since RTK-Query start using;
 */
export const getQuestionAnswers = async (testId: string | number, questionId: string | number) => {
    try {
        const res = await api.get<answerType[]>(`tests/${testId}/questions/${questionId}/answers`);
        const questionAnswers = res.data;

        return questionAnswers;
    } catch (error) {
        return handleRequestError(error);
    }
};
/**
 * @deprecated since RTK-Query start using;
 */
export const postUserAnswers = async (sessionId: string, bodyObject: SendAnswersData) => {
    try {
        const res = await api.post<TestFlowType>(`sessions/${sessionId}`, bodyObject);
        const questionAnswers = res.data;

        return questionAnswers;
    } catch (error) {
        return handleRequestError(error);
    }
};
