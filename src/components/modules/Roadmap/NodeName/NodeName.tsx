import { FC, Dispatch, SetStateAction } from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";
import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";

import styles from "./NodeName.module.scss";

interface NodeNameProps {
    name: RoadmapModel["name"];
    treeNode: RoadmapModel["children"];
    arrowIconName: string;
    status: RoadmapModel["status"];
    setIsNodeShown: Dispatch<SetStateAction<boolean>>;
}

const NodeName: FC<NodeNameProps> = ({ name, treeNode, arrowIconName, status, setIsNodeShown }) => {
    const color = status === "completed" ? "green" : "transparent";

    return (
        <div className={styles.nodeNameContainer}>
            <input className={styles.checkBox} type="checkbox" />
            <Button className={styles.nodeName} color={color} onClick={() => setIsNodeShown(prev => !prev)}>
                <span>{name}</span>
            </Button>
            {treeNode && treeNode.length !== 0 ? <Icon name={arrowIconName} width={20} height={20} /> : null}
        </div>
    );
};

export default NodeName;
