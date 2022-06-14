import Image from "next/image";
import React, { FC } from "react";
import styles from "./TestCard.module.scss";
import { Text } from "../../elements/Text/Text";

export type TestType = {
    id?: number;
    title: string;
    numberOfQuestions?: number;
    numberOfPassings?: number;
};

type TestCardProps = {
    test: TestType;
};

export const TestCard: FC<TestCardProps> = ({ test }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={`/assets/images/${test.title}.png`}
                    layout="responsive"
                    width={347}
                    height={200}
                    objectFit="cover"
                    objectPosition="center"
                    alt={test.title}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.caption}>
                    <Text bold>{test.title}</Text>
                </div>
                <div className={styles.questions}>
                    <Text>{test.numberOfQuestions} questions</Text>
                </div>
                <div className={styles.line} />
                <div className={styles.performed}>
                    <Text>{test.numberOfPassings ?? 0} performed</Text>
                </div>
            </div>
        </div>
    );
};
