import React, { FC } from "react";
import { TestCategory } from "src/api/apiTypes";
import { CategoryCard } from "./CategoryCard";
import styles from "./Categories.module.scss";

type CategoriesProps = {
    categories: TestCategory[];
};

export const Categories: FC<CategoriesProps> = ({ categories }) => {
    return (
        <div className={styles.categories}>
            {categories.map(item => (
                <CategoryCard category={item} />
            ))}
        </div>
    );
};
