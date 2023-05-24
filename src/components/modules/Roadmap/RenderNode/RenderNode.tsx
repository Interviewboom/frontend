import React, { useState, useRef, useEffect } from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";

import styles from "./RenderNode.module.scss";

interface RenderNodeProps {
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

const RenderNode: React.FC<RenderNodeProps> = ({
    node,
    marginLeft = 10,
    marginTop = 5,
    isCompletedOnly,
    isInProgressOnly,
}) => {
    const [isNodeShown, setIsNodeShown] = useState(true);
    const ref = useRef<HTMLDivElement | null>(null); // ref to get height of node

    const [height, setHeight] = useState(0); // calculate height of horizontal line based on height of node via useEffect

    useEffect(() => {
        setHeight(ref.current?.offsetHeight!);
    }, [ref.current?.offsetHeight]);

    if (!node) return null;

    const hasChildren = node.children?.length !== 0;
    const hasName = node.name !== null;

    const arrowIconName = isNodeShown ? "arrowUp" : "arrowDown";

    return (
        <div className={styles.node_list} style={{ marginLeft, marginTop }} ref={ref}>
            {/* pass margins to give space between nodes */}
            <div className={styles.nodeItem}>
                {hasChildren && hasName && (
                    <>
                        <span className={styles.markdown}>A</span>
                        <span className={styles.verticalDash} style={{ width: marginLeft }} />
                        {/* vertical dotted line markdown --- name */}
                    </>
                )}
                {hasName && (
                    <Button
                        className={`${styles.node_name} ${hasChildren && styles.verticalDash}`}
                        onClick={() => setIsNodeShown(!isNodeShown)}
                    >
                        {node.name}
                        {node.children && node.children.length !== 0 ? (
                            <Icon name={arrowIconName} width={20} height={20} />
                        ) : null}
                    </Button>
                )}
            </div>
            {node.children?.length! >= 1 && hasName && isNodeShown ? (
                <div
                    className={styles.horizontalDash}
                    style={{
                        left: marginLeft + 63, // idk why 63 but it works
                        height: node.children?.length === 1 ? marginTop * 2 : `${height - marginTop}px`, // if node has only one child, then height of horizontal line is 2 * marginTop else height of horizontal line is height of node - marginTop
                    }}
                />
            ) : null}
            {isNodeShown &&
                node.children?.length! >= 1 &&
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
            {/* recursive call to RenderNode */}
        </div>
    );
};

export default RenderNode;
