import Image from "next/image";

import { Button } from "@elements/Button";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title";

import styles from "./AboutSection.module.scss";
import { journeyData } from "./journeyData";
import JourneyStep from "./JourneyStep";

export const AboutSection = () => {
    return (
        <section className={styles.section} id="about-us">
            <div className={styles.info}>
                <Title level={3} semiBold className={styles.infoLeftParagraph}>
                    Join us and we’ll take you to the next level.
                </Title>
                <div className={styles.infoRight}>
                    <Title level={2} className={styles.infoTitle}>
                        Our platform offers a wide range of benefits for coders looking to test their skills. With
                        comprehensive assessments, you can thoroughly evaluate your coding abilities and knowledge.
                    </Title>
                    <div className={styles.infoRightDescription}>
                        <Text isParagraph size="small" lineHeight={17} className={styles.infoSmallParagraph}>
                            A career showcase feature allows you to professionally showcase your expertise to potential
                            employers, giving you a competitive advantage in a job market!
                        </Text>
                        <div className={styles.infoRightWithSnippet}>
                            <Text isParagraph lineHeight={24} className={styles.infoParagraph}>
                                The flexibility and convenience of our platform enable you to test skills at your own
                                pace from anywhere and anytime. Additionally you can connect with the best community of
                                coders for networking and of course learning opportunities.
                            </Text>
                            <Image
                                src="/assets/images/about/aboutCodeSample.png"
                                alt="InterviewBoom about section code snippet"
                                className={styles.infoSampleImg}
                                width={288}
                                height={170}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.journey}>
                <div className={styles.journeyWrapper}>
                    <Title level={3} semiBold className={styles.journeyLeft}>
                        InterviewBoom will help you
                    </Title>
                    <div className={styles.guide}>
                        {journeyData?.map(({ step, title, subtitle }) => {
                            return <JourneyStep key={step} step={step} title={title} subtitle={subtitle} />;
                        })}
                        <Button link="/auth/sign-up" className={styles.journeyButton}>
                            Begin my coding journey
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
