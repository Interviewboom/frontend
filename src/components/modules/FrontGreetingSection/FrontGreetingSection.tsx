import React from "react";

import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import Image from "next/image";
import { Button } from "@elements/Button/Button";
import { Icon } from "@elements/Icon";

import styles from "./FrontGreetingSection.module.scss";

export const FrontGreetingSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title level={1} className={styles.title}>
                        Prove Your Coding Aptitude
                        <Image
                            src="/assets/images/greetingSection/icon.png"
                            width={50}
                            height={44}
                            alt="icon"
                            quality={100}
                            className={styles.imageIcon}
                        />
                    </Title>
                    <Text size="big" isParagraph className={styles.subtitle}>
                        Sharpen your skills with comprehensive testing. Measure your abilities with challenges and
                        assessments.
                    </Text>
                    <div className={styles.buttons}>
                        <Button link="/categories" className={styles.contentButton}>
                            Explore our tests
                        </Button>
                        <a href="#tests" className={styles.contentArrowButton}>
                            <Icon name="arrowDown" stroke="#74A253" className={styles.arrowDown} />
                        </a>
                    </div>
                    <div className={styles.statistics}>
                        <Text isParagraph className={styles.info}>
                            Developers tested(140)
                        </Text>
                        <Text isParagraph className={styles.info}>
                            Average score(0.88)
                        </Text>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/images/greetingSection/greeting.svg"
                        width={800}
                        height={800}
                        alt="roadmap"
                        quality={100}
                        priority
                        className={styles.imageRoadmap}
                    />
                </div>
            </div>
        </section>
    );
};
