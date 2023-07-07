import { FC, Dispatch, SetStateAction } from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";
import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";
import { useAppDispatch } from "src/redux/hooks";
import { setIsShownPopup } from "src/redux/slices/roadmapSlice";

import styles from "./NodeName.module.scss";

interface NodeNameProps {
    name: RoadmapModel["name"];
    treeNode: RoadmapModel["children"];
    arrowIconName: string;
    status: RoadmapModel["status"];
    setIsNodeShown: Dispatch<SetStateAction<boolean>>;
}

const NodeName: FC<NodeNameProps> = ({ name, treeNode, arrowIconName, status, setIsNodeShown }) => {
    const dispatch = useAppDispatch();

    const popupHandler = () => {
        dispatch(setIsShownPopup());
    };

    const type = status;
    let color: "green" | "transparent" | "grey" = "transparent";
    let isCompleted = false;
    let isInactive = false;

    switch (status) {
        case "completed":
            color = "green";
            isCompleted = true;
            break;
        case "active":
            color = "transparent";
            break;
        case "inactive":
            color = "grey";
            isInactive = true;
            break;
        default:
            break;
    }

    return (
        <div className={`${styles.nodeNameContainer} ${styles[type]}`}>
            {isInactive && <Icon className={styles.lock} name="lock" width={20} height={20} />}
            {isCompleted && <input className={styles.checkBox} type="checkbox" checked={status === "completed"} />}
            <Button disabled={status === "inactive"} className={styles.nodeName} color={color} onClick={popupHandler}>
                {name}
            </Button>
            {treeNode && treeNode.length !== 0 ? (
                <button type="button" onClick={() => setIsNodeShown(prev => !prev)}>
                    <Icon name={arrowIconName} width={20} height={20} />
                </button>
            ) : null}
        </div>
    );
};

export default NodeName;