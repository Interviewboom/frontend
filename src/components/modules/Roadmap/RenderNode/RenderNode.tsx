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
    isLast?: boolean;
}

const RenderNode: React.FC<RenderNodeProps> = ({
    node,
    marginLeft = 10,
    marginTop = 5,
    isCompletedOnly,
    isInProgressOnly,
    isLast,
}) => {
    const [isNodeShown, setIsNodeShown] = useState(true);

    const ref = useRef<HTMLDivElement | null>(null);

    const height = useNodeHeight(ref);

    const hasName = node.name !== null;
    const hasChildren = node.children && node.children?.length >= 1;
    const arrowIconName = isNodeShown ? "arrowUp" : "arrowDown";

    const shouldShowNodeItem =
        hasName && ((node.status === "active" && isInProgressOnly) || (node.status === "completed" && isCompletedOnly));

    const showAll = !isInProgressOnly && !isCompletedOnly;

    return (
        <div className={styles.nodeList} style={{ marginLeft, marginTop }} ref={ref}>
            {shouldShowNodeItem || showAll ? (
                <div className={styles.nodeItem}>
                    <HorizontalLine
                        id={node.id}
                        styles={`${styles.markdown} 
                        ${isLast ? `${styles.hidden}` : ``}`}
                        horizontalDashStyle={styles.horizontalDash}
                    />
                    <NodeName
                        name={node.name}
                        treeNode={node.children}
                        arrowIconName={arrowIconName}
                        status={node.status}
                        setIsNodeShown={setIsNodeShown}
                    />
                </div>
            ) : null}
            {hasChildren && hasName && isNodeShown && showAll ? (
                <VerticalLine
                    treeNode={node.children}
                    marginLeft={marginLeft}
                    marginTop={marginTop}
                    height={height}
                    styles={styles.verticalDash}
                />
            ) : null}
            {isNodeShown &&
                hasChildren &&
                node.children?.map((treeNode, index) => (
                    <RenderNode
                        key={treeNode.name}
                        node={treeNode}
                        marginLeft={marginLeft + 15}
                        marginTop={marginTop + 10}
                        isCompletedOnly={isCompletedOnly}
                        isInProgressOnly={isInProgressOnly}
                        isLast={node.children && node.children.length ? index === node.children.length - 1 : false}
                    />
                ))}
        </div>
    );
};

export default RenderNode;
