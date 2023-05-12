import React from "react";

import { Button } from "@elements/Button";
import { useFilterOptions } from "@utils/useFilterOptions";

import RenderNode from "@modules/Roadmap/RenderNode/RenderNode";
import { RoadmapProps } from "./Roadmap.types";

import styles from "./RoadmapByTarget.module.scss";

export const RoadmapByTarget: React.FC<RoadmapProps> = ({ roadmapData }) => {
    const { showCompletedOnly, showInProgressOnly, toggleCompletedOnly, toggleInProgressOnly } = useFilterOptions();

    return (
        <div className={styles.roadmap_container}>
            <header className={styles.header}>
                <h1 className={styles.roadmap_title}>Roadmap for my target</h1>
                <div className={styles.roadmap_button_group}>
                    <Button className={styles.roadmap_button} onClick={toggleCompletedOnly}>
                        Completed only <input type="checkbox" checked={showCompletedOnly} />
                    </Button>
                    <Button className={styles.roadmap_button} onClick={toggleInProgressOnly}>
                        In progress only <input type="checkbox" checked={showInProgressOnly} />
                    </Button>
                </div>
            </header>
            <RenderNode node={roadmapData} isCompletedOnly={showCompletedOnly} isInProgressOnly={showInProgressOnly} />
        </div>
    );
};
