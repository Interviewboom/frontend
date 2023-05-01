import React, { FC } from "react";
import { TestType } from "src/api/apiTypes";
import { useCssClasses } from "@utils/getClassnames";
import { TestCard } from "./TestCard";

import styles from "./Tests.module.scss";

type TestsProps = {
    testsArray: TestType[];
    areScrollable?: boolean;
};

export const Tests: FC<TestsProps> = ({ testsArray, areScrollable }) => {
    const classes = useCssClasses([styles.tests, areScrollable && styles.noWrap]);

    return (
        <div className={styles.testsWrapper}>
            <div className={classes}>
                {testsArray?.map(item => (
                    <TestCard key={item.id} testInfo={item} />
                ))}
            </div>
        </div>
    );
};
