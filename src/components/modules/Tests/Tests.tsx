import React, { FC } from "react";
import { TestType } from "src/api/apiTypes";

import { TestCard } from "./TestCard";
import styles from "./Tests.module.scss";

type TestsProps = {
    tests: TestType[];
};

export const Tests: FC<TestsProps> = ({ tests }) => {
    return <div className={styles.tests}> {tests && tests.map(item => <TestCard test={item} />)}</div>;
};
