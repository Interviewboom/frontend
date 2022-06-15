import Image from "next/image";
import React, { FC } from "react";
import styles from "./CategoryCard.module.scss";
import { Text } from "../../elements/Text/Text";

export type TestCategory = {
    id?: number;
    name?: string;
    parent_id?: number;
    title: string;
};

type CategoryCardProps = {
    category: TestCategory;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={`/assets/images/categories/${category.name}.jpg`}
                    layout="responsive"
                    width={347}
                    height={283}
                    objectFit="cover"
                    objectPosition="center"
                    alt={category.name}
                />
            </div>

            <div className={styles.caption}>
                <Text bold>{category.title}</Text>
            </div>
        </div>
    );
};

export default CategoryCard;
