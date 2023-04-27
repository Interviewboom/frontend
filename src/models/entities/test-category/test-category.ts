export interface TestCategory {
    id: number;
    name: string;
    parent_id: number;
    title: string;
    parent: string | null;
}
