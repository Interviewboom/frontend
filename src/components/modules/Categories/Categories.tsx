import React, { FC } from "react";
import { TestCategory } from "src/api/apiTypes";
import { useCssClasses } from "@utils/getClassnames";
import { CategoryCard } from "./CategoryCard";
import styles from "./Categories.module.scss";

type CategoriesProps = {
    categories: TestCategory[];
    areScrollable?: boolean;
};

export const Categories: FC<CategoriesProps> = ({ categories, areScrollable }) => {
    const classes = useCssClasses([styles.categories, areScrollable && styles.noWrap]);

    return (
        <div className={styles.categoriesWrapper}>
            <div className={classes}>
                {categories.map(item => (
                    <CategoryCard category={item} />
                ))}
            </div>
        </div>
    );
};
