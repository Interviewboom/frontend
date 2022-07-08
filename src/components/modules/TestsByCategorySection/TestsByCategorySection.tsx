import React, { FC } from "react";
import { Title } from "@elements/Title/Title";
import { Tests } from "@modules/Tests/Tests";
import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { TestCategory, TestType } from "src/api/apiTypes";

import styles from "./TestsByCategorySection.module.scss";

type TestsByCategorySectionProps = {
    tests: TestType[];
    category: TestCategory;
};

export const TestsByCategorySection: FC<TestsByCategorySectionProps> = ({ tests, category }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Breadcrumb
                    links={[
                        { link: "/categories", name: "Test categories" },
                        { link: `/categories/${category.id}`, name: category.title },
                    ]}
                />
                <Title level={2} className={styles.titleMargin}>
                    {category.title}
                </Title>
                <Tests tests={tests} />
            </div>
        </section>
    );
};
