import React from "react";

import { Button } from "@elements/Button";
import RenderNode from "@modules/Roadmap/RenderNode/RenderNode";
import { useFilterOptions } from "@utils/useFilterOptions";
import { RoadmapModel } from "src/models/entities/roadmap-model/roadmap-model";

import styles from "./RoadmapByTarget.module.scss";

interface RoadmapByTargetProps {
    roadmap: RoadmapModel;
}

export const RoadmapByTarget: React.FC<RoadmapByTargetProps> = ({ roadmap }) => {
    const { showCompletedOnly, showInProgressOnly, toggleCompletedOnly, toggleInProgressOnly } = useFilterOptions();

    return (
        <div className={styles.roadmapContainer}>
            <header className={styles.header}>
                <h1 className={styles.roadmapTitle}>Roadmap for my target</h1>
                <div className={styles.roadmapButtonGroup}>
                    <Button className={styles.roadmapButton} onClick={toggleCompletedOnly}>
                        Completed only <input type="checkbox" checked={showCompletedOnly} />
                    </Button>
                    <Button className={styles.roadmapButton} onClick={toggleInProgressOnly}>
                        In progress only <input type="checkbox" checked={showInProgressOnly} />
                    </Button>
                </div>
            </header>
            <RenderNode node={roadmap} isCompletedOnly={showCompletedOnly} isInProgressOnly={showInProgressOnly} />
        </div>
    );
};
