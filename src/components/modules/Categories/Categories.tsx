import React, { FC } from "react";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { useCssClasses } from "@utils/getClassnames";
import { CategoryCard } from "./CategoryCard";
import styles from "./Categories.module.scss";

type CategoriesProps = {
    categories: TestCategoryModel[];
    areScrollable?: boolean;
};

export const Categories: FC<CategoriesProps> = ({ categories, areScrollable }) => {
    const classes = useCssClasses([styles.categories, areScrollable && styles.noWrap]);

    return (
        <div className={styles.categoriesWrapper}>
            <div className={classes}>
                {categories.map(item => (
                    <CategoryCard key={item.id} category={item} />
                ))}
            </div>
        </div>
    );
};
