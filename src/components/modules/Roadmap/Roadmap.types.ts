export interface RoadmapProps {
    roadmapData: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RoadmapProps["roadmapData"][] | [];
    };
}
