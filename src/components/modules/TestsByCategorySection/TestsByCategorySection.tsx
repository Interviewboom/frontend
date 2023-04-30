import React, { FC } from "react";
import { Title } from "@elements/Title/Title";
import { Tests } from "@modules/Tests/Tests";
import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { TestCategoryModel } from "src/models/entities/test-category/test-category";
import { TestModel } from "src/models/entities/test/test";
import styles from "./TestsByCategorySection.module.scss";

type TestsByCategorySectionProps = {
    category: TestCategoryModel;
    testsByCategory: TestModel[];
};

export const TestsByCategorySection: FC<TestsByCategorySectionProps> = ({ testsByCategory, category }) => {
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
                <Tests testsArray={testsByCategory} />
            </div>
        </section>
    );
};
