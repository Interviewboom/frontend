import React from "react";

import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";

interface VerticalLineProps {
    treeNode: RoadmapModel["children"];
    marginLeft: number;
    marginTop: number;
    height: number;
    styles: string;
}

const VerticalLine: React.FC<VerticalLineProps> = ({ treeNode, marginLeft, marginTop, height, styles }) => {
    return (
        <div
            className={styles}
            style={{
                left: marginLeft + 63,
                height: treeNode?.length === 1 ? marginTop * 3.5 : `${height - marginTop}px`,
            }}
        />
    );
};

export default VerticalLine;
