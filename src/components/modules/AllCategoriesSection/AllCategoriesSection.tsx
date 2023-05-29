import React, { FC } from "react";

import { Breadcrumb } from "@elements/Breadcrumb";
import { Title } from "@elements/Title";
import { Categories } from "@modules/Categories/Categories";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";

import styles from "./AllCategoriesSection.module.scss";

type AllCategoriesSectionsProps = {
    categories: TestCategoryModel[];
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
