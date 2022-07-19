import Image from "next/image";
import { FC } from "react";

import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";
import { TestType } from "src/api/apiTypes";
import Link from "next/link";

import styles from "./TestCard.module.scss";

type TestCardProps = {
    testInfo: TestType;
    numberOfPassings?: number;
};

export const TestCard: FC<TestCardProps> = ({ testInfo, numberOfPassings = 0 }) => {
    return (
        <Link href={`/categories/${testInfo.test_category_id}/test/${testInfo.id}`}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image
                        src={`/assets/images/tests/${testInfo.id}.jpg`}
                        width={347}
                        height={200}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        alt={testInfo.title}
                    />
                </div>
                <div className={styles.content}>
                    <Title level={5} className={styles.paddingsTitle}>
                        {testInfo.title}
                    </Title>

                    <Text
                        size="small"
                        color="grey-text-color"
                        className={styles.paddingsText}
                        isParagraph
                        lineHeight={17}
                    >
                        {testInfo.questions?.length} questions
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
