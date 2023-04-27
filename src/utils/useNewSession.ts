import { useRouter } from "next/router";
import { useCreateSessionMutation } from "../redux/api/sessions-api";

export const useNewSession = () => {
    const router = useRouter();
    const {
        query: { categoryId, testId },
    } = router;
    const [createSession, { isSuccess, data }] = useCreateSessionMutation();

    if (isSuccess) {
        router.push(`/categories/${categoryId}/test/${testId}/session/${data?.id}`);
    }

    return () => createSession({ testId: Number(testId) });
};
