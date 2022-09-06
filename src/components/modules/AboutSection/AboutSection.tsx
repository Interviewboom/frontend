import Image from "next/image";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { Logo } from "@elements/Logo";

import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
    return (
        <section className={styles.section} id="about-us">
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <div className={styles.titleWrapper}>
                        <Title level={2} className={styles.titleMargin}>
                            About
                        </Title>
                        <Logo />
                    </div>

                    <Text isParagraph className={styles.pMargin}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                    <Text isParagraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </Text>
                </div>
                <div className={styles.image}>
                    <Image src="/assets/images/about.png" alt="laptop" width={736} height={356} />
                </div>
            </div>
        </section>
    );
};
