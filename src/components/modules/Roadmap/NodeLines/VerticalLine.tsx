import React from "react";

import { NodeData } from "../Roadmap.types";

interface VerticalLineProps {
    treeNode: NodeData["children"];
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
                height: treeNode?.length === 1 ? marginTop * 2 : `${height - marginTop - 25}px`,
            }}
        />
    );
};

export default VerticalLine;
