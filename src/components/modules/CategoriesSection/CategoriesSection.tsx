import { FC } from "react";

import { Title } from "@elements/Title/Title";
import { Button } from "@elements/Button/Button";
import { Categories } from "@modules/Categories/Categories";
import { TestCategory } from "src/api/apiTypes";

import styles from "./CategoriesSection.module.scss";

type CategoriesProps = {
    categories: TestCategory[];
};

export const CategoriesSection: FC<CategoriesProps> = ({ categories }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2} className={styles.titleMargin}>
                    Test categories
                </Title>
                <Categories categories={categories} areScrollable />
                <div className={styles.btnWrapper}>
                    <Button link="/categories">More categories</Button>
                </div>
            </div>
        </section>
    );
};
