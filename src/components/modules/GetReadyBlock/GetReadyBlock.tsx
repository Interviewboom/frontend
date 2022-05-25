import React from "react";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import Image from "next/image";
import { Button } from "@elements/Button/Button";

import styles from "./GetReadyBlock.module.scss";

export const GetReadyBlock = () => {
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
                        alt="get ready to interview bgd"
                    />
                </div>
                <div className={styles.content}>
                    <Title level={1}>Підготуйся до сіпвбесіди!</Title>
                    <Text textType="big" isParagraph>
                        Платформа яка допоможе підготовки до технічної співбесіди в міжнародну компанію
                    </Text>
                    <Button link="all-tests">Розпочати</Button>
                </div>
            </div>
        </section>
    );
};
