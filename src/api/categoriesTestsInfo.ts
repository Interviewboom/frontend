import { handleRequestError } from "@utils/errorHandler";
import { TestType } from "./apiTypes";
import { paramsType, stringifyParams } from "./stringifyParams";
import api from "./index";

/**
 * @deprecated since RTK-Query start using; use getTests
 */
export const getTests = async (paramsObj: paramsType = {}) => {
    try {
        const res = await api.get<TestType[]>(`tests${stringifyParams(paramsObj)}`);
        const tests: TestType[] = res.data;

        return tests;
    } catch (error) {
        return handleRequestError(error);
    }
};
