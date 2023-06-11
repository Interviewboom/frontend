import React, { FC } from "react";

import { useBreakpoint } from "src/hooks/useBreakpoint";
import { TestModel } from "src/models/entities/test-model/test-model";

import TestsSectionDesktop from "./TestsSectionDesktop";
import TestsSectionMobile from "./TestsSectionMobile";

type TestsSectionsProps = {
    popularTests: TestModel[];
};

const TestsSection: FC<TestsSectionsProps> = () => {
    const { lteLarge } = useBreakpoint();

    const badges = [
        "Objects",
        "NPM modules",
        "Type casting",
        "Promises",
        "DOM",
        "Memory management",
        "Closures",
        "Patterns",
        "Comparisons",
        "Event loop",
        "Algorithms",
        "Prototypes",
    ];

    const tests = [
        {
            id: 1,
            title: "Javascript",
            description:
                "Check your abilities and showcase the expertise in JavaScript coding with our platform, join us to take the JavaScript knowledge to the next level!",
            type: "Express Test",
            level: "Junior",
            badges,
            test_category_id: 1,
        },
        {
            id: 2,
            title: "PHP",
            description:
                "From fundamental PHP concepts to advanced techniques, InterviewBoom assessments will test your proficiency and help you excel in coding.",
            type: undefined,
            level: undefined,
            badges,
            test_category_id: 2,
        },
        {
            id: 3,
            title: "C++",
            description:
                "From data structures to algorithms, the assessments will challenge and improve your proficiency.",
            type: undefined,
            level: undefined,
            badges,
            test_category_id: 3,
        },
    ];
    return lteLarge ? <TestsSectionMobile popularTests={tests} /> : <TestsSectionDesktop popularTests={tests} />;
};

export default TestsSection;
