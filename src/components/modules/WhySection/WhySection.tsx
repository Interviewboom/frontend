import Image from "next/legacy/image";
import React from "react";

import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";

import styles from "./WhySection.module.scss";

export const WhySection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <div>
                        <Image
                            src="/assets/images/dashboard.png"
                            width={1400}
                            height={780}
                            alt="Developer’s roadmap"
                            priority
                        />
                        <div className={styles.blockFirst} />
                        <div className={styles.blockSecond} />
                    </div>
                    <Text size="small" className={styles.overview}>
                        1. Developer’s roadmap
                    </Text>
                </div>
                <div className={styles.content}>
                    <Title level={4} className={styles.title}>
                        Why InterviewBoom
                    </Title>
                    <Text className={styles.description}>
                        Measure the progress. With our tests and assessments you can measure your progress and track the
                        performance over time, gaining valuable insights into your proficiency.
                    </Text>
                </div>
            </div>
        </section>
    );
};
