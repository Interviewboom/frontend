import Image from "next/image";
import React, { forwardRef } from "react";

import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";

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
                        src={`/assets/images/tests/${test.id}.jpg`}
                        width={347}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        alt={test.title}
                    />
                </div>
                <div className={styles.content}>
                    <Title level={5} className={styles.paddingsTitle}>
                        {test.title}
                    </Title>

                    <Text
                        size="small"
                        color="grey-text-color"
                        className={styles.paddingsText}
                        isParagraph
                        lineHeight={17}
                    >
                        {test.questions?.length} questions
                    </Text>

                    <div className={styles.line} />

                    <Text size="small" className={styles.paddingsText} isParagraph lineHeight={17}>
                        {numberOfPassings} performed
                    </Text>
                </div>
            </div>
        </a>
    );
});
