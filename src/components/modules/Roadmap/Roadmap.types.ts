export interface NodeData {
    name: string | null;
    markdown?: string;
    horizontal?: boolean;
    children?: NodeData[] | [];
}

export interface RoadmapProps {
    roadmapData: NodeData;
}

export interface RenderNodeProps {
    node: NodeData;
    marginLeft?: number;
    marginTop?: number;
    isCompletedOnly?: boolean;
    isInProgressOnly?: boolean;
}
