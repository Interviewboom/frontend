import React from "react";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import { Button } from "@elements/Button/Button";

import styles from "./DonationInfoSection.module.scss";

export const DonationInfoSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title level={2}>Підтримайте наш проект</Title>
                    <Text size="big" isParagraph>
                        Підтримайте наш проєкт, щоб ми могли змогу оновлювати бази тестів та додавати нові круті
                        категорії на сайт. Ось наш Patreon для отримання донатів лояльної аудиторії.
                    </Text>
                    <Button>Підтримати</Button>
                </div>
            </div>
        </section>
    );
};
