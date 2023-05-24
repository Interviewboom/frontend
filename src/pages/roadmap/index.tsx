import { NextPage } from "next";
import React from "react";

import { RoadmapByTarget } from "@modules/Roadmap/index";
import { RoadmapProps } from "@modules/Roadmap/Roadmap.types";
import roadMapData from "@modules/Roadmap/roadmapData.json";

const Roadmap: NextPage<RoadmapProps> = ({ roadmapData }: RoadmapProps) => {
    return <RoadmapByTarget roadmapData={roadmapData} />;
};

export const getServerSideProps = async () => {
    const roadmapData = roadMapData;

    if (roadmapData) {
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
