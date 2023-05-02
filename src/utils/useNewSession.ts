import { useRouter } from "next/router";
import { useCreateSessionMutation } from "../redux/api/sessions-api";

export const useNewSession = () => {
    const router = useRouter();
    const {
        query: { categoryId, testId },
    } = router;
    const [createSessionRequest, { isSuccess, data }] = useCreateSessionMutation();

    if (isSuccess) {
        router.push(`/categories/${categoryId}/test/${testId}/session/${data?.id}`);
    }

    return () => createSessionRequest({ testId: Number(testId) });
};
