import { NextPage } from "next";

import { RoadmapByTarget } from "@modules/Roadmap";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";
import { getRoadmapByComplexityLevelId } from "src/redux/api/roadmap-api";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { wrapper } from "src/redux/store";

interface RoadmapByComplexityLevelIdProps {
    roadmap: RoadmapModel;
}

const RoadmapByComplexityLevelId: NextPage<RoadmapByComplexityLevelIdProps> = ({
    roadmap,
}: RoadmapByComplexityLevelIdProps) => {
    return <RoadmapByTarget roadmap={roadmap} />;
};

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    const { accessToken } = store.getState().auth;
    if (!accessToken) {
        return {
            redirect: {
                destination: "/auth/sign-in",
                permanent: false,
            },
        };
    }

    const complexityLevelId = context.params?.complexityLevelId as string | number;

    if (typeof complexityLevelId === "string" || "number") {
        const { data: roadmap, isError } = await store.dispatch(
            getRoadmapByComplexityLevelId.initiate({ complexityLevelId: complexityLevelId || 1 })
        );

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: { roadmap, error: getGenericErrorMessage(isError) },
        };
    }

    return { notFound: true };
});

export default RoadmapByComplexityLevelId;
