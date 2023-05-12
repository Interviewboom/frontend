import React, { useState } from "react";

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

    if (!node) return null;

    const arrowIconName = isNodeShown ? "arrowUp" : "arrowDown";

    return (
        <div className={styles.node_list} style={{ marginLeft, marginTop }}>
            {node.name && (
                <Button className={styles.node_name} onClick={() => setIsNodeShown(!isNodeShown)}>
                    {node.name}{" "}
                    {node.children && node.children.length ? (
                        <Icon name={arrowIconName} width={20} height={20} />
                    ) : null}
                </Button>
            )}
            {isNodeShown &&
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
