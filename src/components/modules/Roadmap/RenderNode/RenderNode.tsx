import React, { useState, useRef } from "react";

import { useNodeHeight } from "@utils/useNodeHeight";
import { RoadmapModel as Node } from "src/models/entities/roadmap-model/roadmap-model";

import styles from "./RenderNode.module.scss";
import HorizontalLine from "../NodeLines/HorizontalLine";
import VerticalLine from "../NodeLines/VerticalLine";
import NodeName from "../NodeName/NodeName";

interface RenderNodeProps {
    node: Node;
    marginLeft?: number;
    marginTop?: number;
    isCompletedOnly?: boolean;
    isInProgressOnly?: boolean;
}

const RenderNode: React.FC<RenderNodeProps> = ({
    node,
    marginLeft = 10,
    marginTop = 5,
    isCompletedOnly,
    isInProgressOnly,
}) => {
    const [isNodeShown, setIsNodeShown] = useState(true);

    const ref = useRef<HTMLDivElement | null>(null);

    const height = useNodeHeight(ref);

    const hasName = node.name !== null;

    const arrowIconName = isNodeShown ? "arrowUp" : "arrowDown";

    return (
        <div className={styles.nodeList} style={{ marginLeft, marginTop }} ref={ref}>
            {hasName && (
                <div className={styles.nodeItem}>
                    <HorizontalLine id={node.id} styles={styles.markdown} horizontalDashStyle={styles.horizontalDash} />
                    <NodeName
                        name={node.name}
                        treeNode={node.children}
                        arrowIconName={arrowIconName}
                        styles={styles.nodeName}
                        setIsNodeShown={setIsNodeShown}
                    />
                </div>
            )}
            {node.children && node.children?.length >= 1 && hasName && isNodeShown ? (
                <VerticalLine
                    treeNode={node.children}
                    marginLeft={marginLeft}
                    marginTop={marginTop}
                    height={height}
                    styles={styles.verticalDash}
                />
            ) : null}
            {isNodeShown &&
                node.children &&
                node.children?.length >= 1 &&
                node.children?.map(treeNode => (
                    <RenderNode
                        key={treeNode.name}
                        node={treeNode}
                        marginLeft={marginLeft + 15}
                        marginTop={marginTop + 5}
                        isCompletedOnly={isCompletedOnly}
                        isInProgressOnly={isInProgressOnly}
                    />
                ))}
        </div>
    );
};

export default RenderNode;
