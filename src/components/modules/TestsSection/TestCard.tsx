import Image from "next/image";
import React, { forwardRef } from "react";
import { Text } from "@elements/Text/Text";

import styles from "./TestCard.module.scss";

export type TestType = {
    id?: number;
    title: string;
    questions: [];
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
                        <Text size="small" color="grey-text-color">
                            {test.questions?.length} questions
                        </Text>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.performed}>
                        <Text size="small">{numberOfPassings} performed</Text>
                    </div>
                </div>
            </div>
        </a>
    );
});
