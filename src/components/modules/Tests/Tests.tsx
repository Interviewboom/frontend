import React, { FC } from "react";
import { TestType } from "src/api/apiTypes";

import { TestCard } from "./TestCard";
import styles from "./Tests.module.scss";

type TestsProps = {
    testsArray: TestType[];
};

export const Tests: FC<TestsProps> = ({ testsArray }) => {
    return <div className={styles.tests}> {testsArray && testsArray.map(item => <TestCard testInfo={item} />)}</div>;
};
