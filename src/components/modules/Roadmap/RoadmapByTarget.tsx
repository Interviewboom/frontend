import React, { useState } from "react";

import { Button } from "@elements/Button";

import RenderNode from "@modules/Roadmap/RenderNode/RenderNode";

import styles from "./RoadmapByTarget.module.scss";

interface RoadmapByTargetProps {
    roadmapData: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RoadmapByTargetProps["roadmapData"][] | [];
    };
}

export const RoadmapByTarget: React.FC<RoadmapByTargetProps> = ({ roadmapData }) => {
    const [completedOnly, setCompletedOnly] = useState(false);

    const [inProgressOnly, setInProgressOnly] = useState(false);

    return (
        <div className={styles.roadmap_container}>
            <header className={styles.header}>
                <h1 className={styles.roadmap_title}>Roadmap for my target</h1>
                <div className={styles.roadmap_button_group}>
                    <Button className={styles.roadmap_button} onClick={() => setCompletedOnly(!completedOnly)}>
                        Completed only <input type="checkbox" checked={completedOnly} />
                    </Button>
                    <Button className={styles.roadmap_button} onClick={() => setInProgressOnly(!inProgressOnly)}>
                        In progress only <input type="checkbox" checked={inProgressOnly} />
                    </Button>
                </div>
            </header>
            <RenderNode node={roadmapData} completedOnly={completedOnly} inProgressOnly={inProgressOnly} />
        </div>
    );
};
