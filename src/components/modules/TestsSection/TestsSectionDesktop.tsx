import Image from "next/image";
import React, { FC } from "react";

import { Button } from "@elements/Button/Button";
import { ButtonLink } from "@elements/Button/ButtonLink";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { getBadgeList } from "@utils/tests";
import { useBreakpoint } from "src/hooks/useBreakpoint";

import styles from "./TestsSectionDesktop.module.scss";

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

const TestsSectionDesktop: FC<TestsSectionsProps> = ({ popularTests }) => {
    const { lteLarge } = useBreakpoint();
    return (
        <section className={styles.sectionDesktop} id="popular-tests">
            <div className={styles.wrapper}>
                <div>
                    <Title level={2} className={styles.titleDesktop}>
                        Most popular tests
                    </Title>
                </div>
                {lteLarge && (
                    <div className={styles.buttonLinkWrapper}>
                        <ButtonLink href="/all-tests" className={styles.link}>
                            Explore all our tests
                        </ButtonLink>
                        <Icon name="arrowDashRight" width={10} height={10} className={styles.arrow} />
                    </div>
                )}
                <div className={styles.tests}>
                    {popularTests.map(({ title, description, level, type, id, badges }, index) => {
                        const badgeList = getBadgeList(badges);
                        return (
                            <div key={id} className={styles.testDesktop}>
                                <div className={styles.linkContainer}>
                                    {index === 0 ? (
                                        <div className={styles.buttonLinkWrapper}>
                                            <ButtonLink href="/all-tests" className={styles.link}>
                                                Explore all our tests
                                            </ButtonLink>
                                            <Icon
                                                name="arrowDashRight"
                                                width={10}
                                                height={10}
                                                className={styles.arrow}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.descriptionDesktop}>
                                        <div className={styles.availability}>
                                            {/* <ButtonLink href={`/categories/${test_category_id}/test/${id}`}>
                                            {title}
                                        </ButtonLink> */}
                                            <Text className={styles.testTitle}>{title}</Text>
                                            {!type && <span className={styles.badgeSoon}>soon</span>}
                                        </div>
                                        <Text>{description}</Text>
                                        <Button>Let’s start testing</Button>
                                    </div>
                                    <div className={styles.detailsDesktop}>
                                        {type ? (
                                            <>
                                                <Image
                                                    src="/assets/images/greetingSection/icon.png"
                                                    width={30}
                                                    height={30}
                                                    alt="icon"
                                                    quality={100}
                                                    className={styles.detailsIcon}
                                                />
                                                <div className={styles.blockDesktop}>
                                                    <Text color="greyTextColor">Type</Text>
                                                    <Text>{type}</Text>
                                                </div>
                                            </>
                                        ) : null}
                                        <div className={styles.blockDesktop}>
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
                                    </div>
                                </div>
                                <div className={styles.questionsDesktop}>
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
                                            {badgeList.map((line, idx) => (
                                                <div key={idx} className={styles.badgeLine}>
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestsSectionDesktop;
