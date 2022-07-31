import { useRouter } from "next/router";
import { startSession } from "../api/testFlow";

export const useNewSession = () => {
    const router = useRouter();

    return async () => {
        if (typeof router.query.testId !== "string") {
            return;
        }

        const sessionData = await startSession({
            testId: Number(router.query.testId),
        });

        if (sessionData instanceof Error) {
            return;
        }

        router.push(`/categories/${router.query?.categoryId}/test/${router.query?.testId}/session/${sessionData.id}`);
    };
};
