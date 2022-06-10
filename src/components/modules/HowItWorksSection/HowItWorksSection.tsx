import React, { useMemo } from "react";

import styles from "./HowItWorksSection.module.scss";
import { Button } from "../../elements/Button/Button";
import { Title } from "../../elements/Title/Title";
import { Step } from "./Step";

export const HowItWorksSection = () => {
    const steps = useMemo(
        () => [
            { size: 66, iconName: "list", caption: "1. Choose the test" },
            { size: 88, iconName: "test-checked", caption: "2. Take the test by the end" },
            { size: 88, iconName: "school-hat", caption: "3. Improve your knowledge" },
            { size: 88, iconName: "celebration", caption: "4. Successfully pass the interview" },
        ],
        []
    );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>How does it work?</Title>
                <div className={styles.stepsContainer}>
                    {steps.map(item => (
                        <Step size={item.size} iconName={item.iconName} caption={item.caption} key={item.caption} />
                    ))}
                </div>
                <Button link="/test-categories">Take tests</Button>
            </div>
        </section>
    );
};
