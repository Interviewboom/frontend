import React from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";

import { RenderNodeProps } from "../Roadmap.types";

interface NodeNameProps {
    name: RenderNodeProps["node"]["name"];
    treeNode: RenderNodeProps["node"]["children"];
    arrowIconName: string;
    styles: string;
    setIsNodeShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const NodeName: React.FC<NodeNameProps> = ({ name, treeNode, arrowIconName, styles, setIsNodeShown }) => {
    return (
        <Button className={styles} onClick={() => setIsNodeShown(prev => !prev)}>
            {name}
            {treeNode && treeNode.length !== 0 ? <Icon name={arrowIconName} width={20} height={20} /> : null}
        </Button>
    );
};

export default NodeName;
