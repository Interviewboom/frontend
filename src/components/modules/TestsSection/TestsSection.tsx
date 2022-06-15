import React, { FC } from "react";
import Link from "next/link";
import { TestCard, TestType } from "./TestCard";
import { Title } from "../../elements/Title/Title";
import { Button } from "../../elements/Button/Button";
import { Text } from "../../elements/Text/Text";
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
