import React from "react";

import { Button } from "@elements/Button/Button";
import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";

import styles from "./DonationInfoSection.module.scss";

export const DonationInfoSection = () => {
    return (
        <section className={styles.section} id="support-the-project">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title level={2} className={styles.paddings}>
                        Support our project
                    </Title>
                    <Text size="big" isParagraph className={styles.textMargin} lineHeight={24}>
                        Support our project so we can update tests and add new categories to the site. Here is our
                        Patreon for donating from like-minded people.
                    </Text>
                    <Button link="/patreon.com">Support</Button>
                </div>
            </div>
        </section>
    );
};
