import React, { FC } from "react";
import { Test } from "src/models/entities/test/test";
import { useCssClasses } from "@utils/getClassnames";
import { TestCard } from "./TestCard";

import styles from "./Tests.module.scss";

type TestsProps = {
    testsArray: Test[];
    areScrollable?: boolean;
};

export const Tests: FC<TestsProps> = ({ testsArray, areScrollable }) => {
    const classes = useCssClasses([styles.tests, areScrollable && styles.noWrap]);

    return (
        <div className={styles.testsWrapper}>
            <div className={classes}> {testsArray && testsArray.map(item => <TestCard testInfo={item} />)}</div>
        </div>
    );
};
