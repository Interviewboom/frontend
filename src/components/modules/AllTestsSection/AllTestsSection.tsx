import React, { FC } from "react";
import { Title } from "@elements/Title/Title";
import { Tests } from "@modules/Tests/Tests";
import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { TestType } from "src/api/apiTypes";

import styles from "./AllTestsSection.module.scss";

type AllTestsSectionProps = {
    allTests: TestType[];
};

export const AllTestsSection: FC<AllTestsSectionProps> = ({ allTests }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Breadcrumb links={[{ link: "/all-tests", name: "All tests" }]} />

                <Title level={2} className={styles.titleMargin}>
                    All tests
                </Title>
                <Tests testsArray={allTests?.sort((a, b) => b.questions.length - a.questions.length)} />
            </div>
        </section>
    );
};
