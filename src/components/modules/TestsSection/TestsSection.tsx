import React, { useMemo } from "react";
import styles from "./TestsSection.module.scss";
import { TestCard } from "./TestCard";
import { Title } from "../../elements/Title/Title";
import { Button } from "../../elements/Button/Button";

export const TestsSection = () => {
    const tests = useMemo(
        () => [
            { title: "Start java script", id: 1, numberOfQuestions: 20, numberOfPassings: 0 },
            { title: "С++", id: 2, numberOfQuestions: 20, numberOfPassings: 10 },
            { title: "Start java script", id: 1, numberOfQuestions: 20, numberOfPassings: 0 },
            { title: "С++", id: 2, numberOfQuestions: 20 },
        ],
        []
    );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>Popular tests</Title>
                <div className={styles.categories}>
                    {tests.map(item => (
                        <TestCard test={item} key={item.id} />
                    ))}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-categories">More tests</Button>
                </div>
            </div>
        </section>
    );
};
