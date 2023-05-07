import React from "react";

import { Button } from "@elements/Button";
import RenderNode from "@modules/Roadmap/RenderNode/RenderNode";

import styles from "./RoadmapByTarget.module.scss";

interface RoadmapByTargetProps {
    roadMapData: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RoadmapByTargetProps["roadMapData"][] | [];
    };
}

const RoadmapByTarget: React.FC<RoadmapByTargetProps> = ({ roadMapData }) => {
    return (
        <div className={styles.roadmap_container}>
            <header className={styles.header}>
                <h1 className={styles.roadmap_title}>Roadmap for my target</h1>
                <div className={styles.roadmap_button_group}>
                    <Button className={styles.roadmap_button}>Completed only</Button>
                    <Button className={styles.roadmap_button}>In progress only</Button>
                </div>
            </header>
            <RenderNode node={roadMapData} />
        </div>
    );
};

export default RoadmapByTarget;
