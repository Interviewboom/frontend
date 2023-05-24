import React from "react";

import { Button } from "@elements/Button";
import RenderNode from "@modules/Roadmap/RenderNode/RenderNode";
import { useFilterOptions } from "@utils/useFilterOptions";

import { RoadmapProps } from "./Roadmap.types";
import styles from "./RoadmapByTarget.module.scss";

export const RoadmapByTarget: React.FC<RoadmapProps> = ({ roadmapData }) => {
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
            <RenderNode node={roadmapData} isCompletedOnly={showCompletedOnly} isInProgressOnly={showInProgressOnly} />
        </div>
    );
};
