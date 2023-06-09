import React, { FC } from "react";

import { Breadcrumb } from "@elements/Breadcrumb";
import { Title } from "@elements/Title";
import { Tests } from "@modules/Tests";
import { TestModel } from "src/models/entities/test-model/test-model";

import styles from "./AllTestsSection.module.scss";

type AllTestsSectionProps = {
    allTests: TestModel[];
};

export const AllTestsSection: FC<AllTestsSectionProps> = ({ allTests }) => {
    const sortedTests = allTests ? [...allTests].sort((a, b) => b.questions.length - a.questions.length) : [];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Breadcrumb links={[{ link: "/all-tests", name: "All tests" }]} />

                <Title level={2} className={styles.titleMargin}>
                    All tests
                </Title>
                <Tests testsArray={sortedTests} />
            </div>
        </section>
    );
};
