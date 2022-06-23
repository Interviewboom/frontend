import React, { FC } from "react";
import Link from "next/link";

import { Text } from "@elements/Text/Text";
import { CategoryCard, TestCategory } from "./CategoryCard";

import styles from "./Categories.module.scss";

type CategoriesProps = {
    categories: TestCategory[];
};

export const Categories: FC<CategoriesProps> = ({ categories }) => {
    return (
        <div className={styles.categories}>
            {categories ? (
                categories.map(item => (
                    <Link href={`/test-categories/${item.name}`} key={item.id} passHref>
                        <CategoryCard category={item} />
                    </Link>
                ))
            ) : (
                <Text>failed to load categories</Text>
            )}
        </div>
    );
};
