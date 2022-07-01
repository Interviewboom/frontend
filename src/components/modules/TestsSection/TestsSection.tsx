import React, { FC } from "react";
import { Title } from "@elements/Title/Title";
import { Button } from "@elements/Button/Button";
import { Tests } from "@modules/Tests/Tests";
import { TestType } from "@utils/apiTypes";

import styles from "./TestsSection.module.scss";

type TestsSectionsProps = {
    tests: TestType[];
};

export const TestsSection: FC<TestsSectionsProps> = ({ tests }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2} className={styles.titleMargin}>
                    Popular tests
                </Title>
                <Tests tests={tests} />
                <div className={styles.btnWrapper}>
                    <Button link="/all-tests">More tests</Button>
                </div>
            </div>
        </section>
    );
};
