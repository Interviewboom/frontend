type Status = "completed" | "active" | "inactive";

export interface RoadmapModel {
    id: number;
    name: string;
    status: Status;
    children?: RoadmapModel[] | [];
}
