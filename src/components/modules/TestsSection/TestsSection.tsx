import React, { FC } from "react";
import { Title } from "@elements/Title/Title";
import { Button } from "@elements/Button/Button";
import { Tests } from "@modules/Tests/Tests";
import { TestType } from "src/api/apiTypes";

import styles from "./TestsSection.module.scss";

type TestsSectionsProps = {
    popularTests: TestType[];
};

export const TestsSection: FC<TestsSectionsProps> = ({ popularTests }) => {
    return (
        <section className={styles.section} id="popular-tests">
            <div className={styles.wrapper}>
                <Title level={2} className={styles.titleMargin}>
                    Popular tests
                </Title>
                <Tests testsArray={popularTests} areScrollable />
                <div className={styles.btnWrapper}>
                    <Button link="/all-tests">More tests</Button>
                </div>
            </div>
        </section>
    );
};
