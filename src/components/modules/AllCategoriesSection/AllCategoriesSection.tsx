import React, { FC } from "react";
import { Categories } from "@modules/Categories/Categories";
import { Title } from "@elements/Title/Title";
import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { TestCategory } from "src/models/entities/test-category/test-category";

import styles from "./AllCategoriesSection.module.scss";

type AllCategoriesSectionsProps = {
    categories: TestCategory[];
};

export const AllCategoriesSection: FC<AllCategoriesSectionsProps> = ({ categories }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Breadcrumb links={[{ link: "/categories", name: "Test categories" }]} />
                <Title level={2} className={styles.titleMargin}>
                    Test categories
                </Title>
                <Categories categories={categories} />
            </div>
        </section>
    );
};
