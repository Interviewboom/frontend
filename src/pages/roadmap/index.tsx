import React from "react";

import RoadmapByTarget from "@modules/Roadmap/RoadmapByTarget";

import roadMapData from "@modules/Roadmap/roadmapData.json";

import { NextPage } from "next";

interface RoadmapProps {
    roadmapData: {
        name: string | null;
        markdown?: string;
        horizontal?: boolean;
        children?: RoadmapProps["roadmapData"][] | [];
    };
}

const Roadmap: NextPage<RoadmapProps> = ({ roadmapData }: RoadmapProps) => {
    return <RoadmapByTarget roadMapData={roadmapData} />;
};

export const getServerSideProps = async () => {
    const roadmapData = roadMapData;

    if (roadmapData !== null) {
        return {
            props: {
                roadmapData: roadmapData ?? null,
            },
        };
    }

    return {
        notFound: true,
    };
};

export default Roadmap;
