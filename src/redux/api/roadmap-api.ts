import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";
import { api } from "src/redux/api";

export const roadmapsApi = api.injectEndpoints({
    endpoints: build => ({
        getRoadmapByComplexityLevelId: build.query<RoadmapModel, { complexityLevelId: string | number }>({
            query: ({ complexityLevelId }) => {
                return {
                    url: `roadmap?complexityLevelId=${complexityLevelId}`,
                };
            },
        }),
    }),
});

export const { getRoadmapByComplexityLevelId } = roadmapsApi.endpoints;
