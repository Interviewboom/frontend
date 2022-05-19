import React from "react";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text/Text";
import styles from "./SupportProjectBlock.module.scss";

export const SupportProjectBlock = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title level={2}>Підтримайте наш проект</Title>
                    <Text textType="big" isParagraph>
                        Підтримайте наш проєкт, щоб ми могли змогу оновлювати бази тестів та додавати нові круті
                        категорії на сайт. Ось наш Patreon для отримання донатів лояльної аудиторії.
                    </Text>
                    <button type="button">Підтримати</button>
                </div>
            </div>
        </section>
    );
};
