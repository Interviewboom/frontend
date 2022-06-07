// import React, { useMemo } from "react";

import styles from "./HowItWorksSection.module.scss";
import { Button } from "../../elements/Button/Button";
import { Title } from "../../elements/Title/Title";
import { Step } from "./Step";

const HowItWorksSection = () => {
    // const steps = useMemo(
    //     () => [
    //         { size: 88, iconName: "list", caption: "1. Оберіть тест" },
    //         { size: 88, iconName: "list", caption: "1. Оберіть тест" },
    //         { size: 88, iconName: "list", caption: "1. Оберіть тест" },
    //         { size: 88, iconName: "list", caption: "1. Оберіть тест" },
    //     ],
    //     []
    // );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>Як це працює?</Title>
                <div className={styles.stepsContainer}>
                    <Step size={88} iconName="list" caption="1. Оберіть тест" />
                    <Step size={88} iconName="test-done" caption="1. Оберіть тест" />
                    <Step size={88} iconName="graduate-hat" caption="1. Оберіть тест" />
                    <Step size={88} iconName="confetti" caption="1. Оберіть тест" />
                </div>
                <Button link="/test-categories">Пройти тести</Button>
            </div>
        </section>
    );
};

export default HowItWorksSection;
