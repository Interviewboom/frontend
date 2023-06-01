import React from "react";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title";

import styles from "./JourneyStep.module.scss";

interface JourneyStepProps {
    step: string;
    title: string;
    subtitle: string;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ step, title, subtitle }) => {
    return (
        <div className={styles.stepContainer}>
            <Text isParagraph className={styles.step}>
                {step}
            </Text>
            <Title className={styles.stepTitle}>{title}</Title>
            <Text isParagraph size="small" className={styles.stepSubtitle}>
                {subtitle}
            </Text>
        </div>
    );
};

export default JourneyStep;
