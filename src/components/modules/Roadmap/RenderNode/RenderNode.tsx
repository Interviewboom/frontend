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
}

const RenderNode: React.FC<RenderNodeProps> = ({ node, marginLeft = 10, marginTop = 5 }) => {
    const [isShown, setIsShown] = useState(true);

    if (!node) return null;

    const arrowIcon = isShown ? (
        <Icon name="arrowUp" width={20} height={20} />
    ) : (
        <Icon name="arrowDown" width={20} height={20} />
    );

    return (
        <ul
            className={styles.node_list}
            style={{ marginLeft, marginTop, display: "flex", flexFlow: node.horizontal ? "row" : "column" }}
        >
            {node.name && (
                <Button className={styles.node_name} onClick={() => setIsShown(!isShown)}>
                    {node?.name} {node.children?.length ? arrowIcon : null}
                </Button>
            )}
            {isShown &&
                node.children?.map((treeNode, index) => (
                    <RenderNode
                        key={index}
                        node={treeNode}
                        marginLeft={node.horizontal ? marginLeft / 20 : marginLeft + 10}
                        marginTop={marginTop + 5}
                    />
                ))}
        </ul>
    );
};

export default RenderNode;
