import React, { useMemo } from "react";
import styles from "./CategoriesSection.module.scss";
import CategoryCard, { TestCategory } from "./CategoryCard";
import { Title } from "../../elements/Title/Title";
import { Button } from "../../elements/Button/Button";

const CategoriesSection = () => {
    const categories: TestCategory[] = useMemo(
        () => [
            { title: "Swift", id: 1, name: "swift" },
            { title: "Swift", id: 1, name: "swift" },
            { title: "Go", id: 1, name: "go" },
            { title: "Javascript", id: 1, name: "javascript" },
        ],
        []
    );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>Test categories</Title>
                <div className={styles.categories}>
                    {categories.map(item => (
                        <CategoryCard category={item} key={item.id} />
                    ))}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-categories">More categories</Button>
                </div>
            </div>
        </section>
    );
};
export default CategoriesSection;
