import React, { FC } from "react";
import Link from "next/link";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import { Button } from "@elements/Button/Button";

import { TestCard, TestType } from "./TestCard";

import styles from "./TestsSection.module.scss";

type TestsSectionsProps = {
    tests: TestType[];
};

export const TestsSection: FC<TestsSectionsProps> = ({ tests }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>Popular tests</Title>
                <div className={styles.categories}>
                    {tests ? (
                        tests.map(item => (
                            <Link href={`${item.title}-test`} key={item.id} passHref>
                                <TestCard test={item} />
                            </Link>
                        ))
                    ) : (
                        <Text>failed to load tests</Text>
                    )}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-tests">More tests</Button>
                </div>
            </div>
        </section>
    );
};
