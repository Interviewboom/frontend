import React from "react";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import Image from "next/image";
import { Button } from "@elements/Button/Button";

import styles from "./FrontGreetingSection.module.scss";

export const FrontGreetingSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <div className={styles.gradient} />
                    <Image
                        src="/assets/images/getReadyToInterview.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        alt="get ready to interview background"
                    />
                </div>
                <div className={styles.content}>
                    <Title level={1} className={styles.marginTitle}>
                        Get ready for future interview
                    </Title>
                    <Text size="big" isParagraph className={styles.marginTitle}>
                        This platform helps to prepare for a technical interview with an international company.
                    </Text>
                    <Button link="/categories">Start</Button>
                </div>
            </div>
        </section>
    );
};
