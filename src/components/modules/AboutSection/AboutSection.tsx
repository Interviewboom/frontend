import Image from "next/image";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title";

import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
    return (
        <section className={styles.section} id="about-us">
            <div className={styles.info}>
                <Text isParagraph>Join us and we’ll take you to the next level.</Text>
                <Title level={2}>
                    Our platform offers a wide range of benefits for coders looking to test their skills. With
                    comprehensive assessments, you can thoroughly evaluate your coding abilities and knowledge.
                </Title>
                <Text>
                    A career showcase feature allows you to professionally showcase your expertise to potential
                    employers, giving you a competitive advantage in a job market!
                </Text>
                <Text>
                    The flexibility and convenience of our platform enable you to test skills at your own pace from
                    anywhere and anytime. Additionally you can connect with the best community of coders for networking
                    and of course learning opportunities.
                </Text>
                <Image
                    src="/assets/images/about/aboutCodeSample.png"
                    alt="IntreviewBoom about section code snippet"
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.journey}>
                <div className={styles.journeyWrapper}>
                    <Text>InterviewBoom will help you</Text>
                    <div className={styles.guide}>123</div>
                </div>
            </div>
        </section>
    );
};
