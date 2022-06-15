import React, { FC } from "react";
import styles from "./TestsSection.module.scss";
import { TestCard, TestType } from "./TestCard";
import { Title } from "../../elements/Title/Title";
import { Button } from "../../elements/Button/Button";
import { Text } from "../../elements/Text/Text";

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
                        tests.map(item => <TestCard test={item} key={item.id} />)
                    ) : (
                        <Text>failed to load testa</Text>
                    )}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-categories">More tests</Button>
                </div>
            </div>
        </section>
    );
};
