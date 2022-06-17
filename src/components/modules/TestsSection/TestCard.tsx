import Image from "next/image";
import React, { forwardRef } from "react";
import { Text } from "@elements/Text/Text";

import styles from "./TestCard.module.scss";

export type QuestionType = {
    id: number;
    title: string;
    test_id: number;
    question: string;
    level: number;
    is_multiselect: boolean;
};

export type TestType = {
    id: number;
    title: string;
    questions: QuestionType[];
    test_category_id: number;
    description: string;
    created_at: string;
    updated_at: string;
};

type TestCardProps = {
    test: TestType;
    numberOfPassings?: number;
    href?: string;
};

export const TestCard = forwardRef<HTMLAnchorElement, TestCardProps>(({ test, numberOfPassings = 0, href }, ref) => {
    return (
        <a href={href} ref={ref}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`/assets/images/${test.title}.png`}
                        width={347}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        alt={test.title}
                    />
                </div>
                <div className={styles.content}>
                    <Text bold className={styles.paddings} isParagraph>
                        {test.title}
                    </Text>

                    <Text size="small" color="grey-text-color" className={styles.paddings} isParagraph>
                        {test.questions?.length} questions
                    </Text>

                    <div className={styles.line} />

                    <Text size="small" className={styles.paddings} isParagraph>
                        {numberOfPassings} performed
                    </Text>
                </div>
            </div>
        </a>
    );
});
