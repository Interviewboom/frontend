import Image from "next/image";
import { FC } from "react";

import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";
import { TestType } from "src/api/apiTypes";
import Link from "next/link";

import styles from "./TestCard.module.scss";

type TestCardProps = {
    test: TestType;
    numberOfPassings?: number;
};

export const TestCard: FC<TestCardProps> = ({ test, numberOfPassings = 0 }) => {
    return (
        <Link href={`/categories/${test.test_category_id}/test/${test.id}`}>
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
        </Link>
    );
};
