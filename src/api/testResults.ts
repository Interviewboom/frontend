import { handleRequestError } from "@utils/errorHandler";
import api from "./index";
import { TestResultsType } from "./apiTypes";

/**
 * @deprecated
 */
export const getTestReport = async (sessionId: string) => {
    try {
        const res = await api.get<TestResultsType>(`sessions/${sessionId}`);
        const testReport = res.data;

        return testReport;
    } catch (error) {
        return handleRequestError(error);
    }
};
