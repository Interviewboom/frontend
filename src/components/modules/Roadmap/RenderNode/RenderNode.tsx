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
    completedOnly?: boolean;
    inProgressOnly?: boolean;
}

const RenderNode: React.FC<RenderNodeProps> = ({
    node,
    marginLeft = 10,
    marginTop = 5,
    completedOnly,
    inProgressOnly,
}) => {
    const [isShown, setIsShown] = useState(true);

    if (!node) return null;

    const arrowIcon = isShown ? (
        <Icon name="arrowUp" width={20} height={20} />
    ) : (
        <Icon name="arrowDown" width={20} height={20} />
    );

    return (
        <div className={styles.node_list} style={{ marginLeft, marginTop }}>
            {node.name && (
                <Button className={styles.node_name} onClick={() => setIsShown(!isShown)}>
                    {node.name} {node.children && node.children.length ? arrowIcon : null}
                </Button>
            )}
            {isShown &&
                node.children?.map((treeNode, index) => (
                    <RenderNode
                        key={index}
                        node={treeNode}
                        marginLeft={marginLeft + 15}
                        marginTop={marginTop + 5}
                        completedOnly={completedOnly}
                        inProgressOnly={inProgressOnly}
                    />
                ))}
        </div>
    );
};

export default RenderNode;
