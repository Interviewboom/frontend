export interface RoadmapProps {
    roadmapData: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RoadmapProps["roadmapData"][] | [];
    };
}

export interface RenderNodeProps {
    node: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RenderNodeProps["node"][] | [];
    };
    marginLeft?: number;
    marginTop?: number;
    isCompletedOnly?: boolean;
    isInProgressOnly?: boolean;
}
