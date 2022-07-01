import React, { FC } from "react";
import { Text } from "@elements/Text/Text";
import Link from "next/link";
import { TestType } from "@utils/apiTypes";

import { TestCard } from "./TestCard";
import styles from "./Tests.module.scss";

type TestsProps = {
    tests: TestType[];
};

export const Tests: FC<TestsProps> = ({ tests }) => {
    return (
        <div className={styles.tests}>
            {tests ? (
                tests.map(item => (
                    <Link href={`/all-tests/${item.title}`} key={item.id} passHref>
                        <TestCard test={item} />
                    </Link>
                ))
            ) : (
                <Text>failed to load tests</Text>
            )}
        </div>
    );
};
