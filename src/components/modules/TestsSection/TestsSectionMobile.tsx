import Image from "next/image";
import React, { FC } from "react";

import { Button } from "@elements/Button/Button";
import { ButtonLink } from "@elements/Button/ButtonLink";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { getBadgeList } from "@utils/tests";

import styles from "./TestsSectionMobile.module.scss";

type TestsSectionsProps = {
    popularTests: {
        id: number;
        title: string;
        description: string;
        type?: string;
        level?: string;
        badges: string[];
        // test_category_id: number;
    }[];
};

const TestsSectionMobile: FC<TestsSectionsProps> = ({ popularTests }) => {
    return (
        <section className={styles.section} id="popular-tests">
            <div className={styles.wrapper}>
                <div>
                    <Title level={2} className={styles.titleMargin}>
                        Most popular tests
                    </Title>
                </div>
                <div className={styles.tests}>
                    {popularTests.map(({ title, description, level, type, id, badges }) => {
                        const badgeList = getBadgeList(badges);
                        return (
                            <div key={id} className={styles.test}>
                                <div className={styles.questions}>
                                    <div>
                                        <Image
                                            src={`/assets/images/categories/${title}.png`}
                                            width={80}
                                            height={80}
                                            alt="icon"
                                            quality={100}
                                            className={styles.questionsIcon}
                                        />
                                        <div className={styles.badges}>
                                            {badgeList.map((line, index) => (
                                                <div key={index} className={styles.badgeLine}>
                                                    {line.map((badge, badgeIndex) => (
                                                        <span key={badgeIndex} className={styles.badge}>
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    {/* <ButtonLink href={`/categories/${test_category_id}/test/${id}`}>{title}</ButtonLink> */}
                                    <Text>{title}</Text>
                                    {type ? (
                                        <Image
                                            src="/assets/images/greetingSection/icon.png"
                                            width={20}
                                            height={15}
                                            alt="icon"
                                            quality={100}
                                        />
                                    ) : (
                                        <span className={styles.badgeSoon}>soon</span>
                                    )}
                                </div>
                                <div className={styles.details}>
                                    {type ? (
                                        <div className={styles.block}>
                                            <Text color="greyTextColor">Type</Text>
                                            <Text>{type}</Text>
                                        </div>
                                    ) : null}
                                    <div className={styles.block}>
                                        {level ? (
                                            <>
                                                <Text color="greyTextColor">Test level</Text>
                                                <Text>{level}</Text>
                                                <Text color="greyTextColor" className={styles.note}>
                                                    (determines your level based on test results)
                                                </Text>
                                            </>
                                        ) : null}
                                    </div>
                                    <Text>{description}</Text>
                                    <Button>Let’s start testing</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ButtonLink href="/all-tests" className={styles.link}>
                    Explore all our tests
                </ButtonLink>
            </div>
        </section>
    );
};

export default TestsSectionMobile;
