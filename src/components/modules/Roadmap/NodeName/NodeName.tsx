import React from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";
import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";

interface NodeNameProps {
    name: RoadmapModel["name"];
    treeNode: RoadmapModel["children"];
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
