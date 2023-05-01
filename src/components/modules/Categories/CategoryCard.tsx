import Image from "next/legacy/image";
import React, { FC } from "react";
import Link from "next/link";

import { Title } from "@elements/Title/Title";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";

import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
    category: TestCategoryModel;
};

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    return (
        <Link href={`/categories/${category.id}`} key={category.id} passHref legacyBehavior>
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
                    <Title level={5}>{category.title}</Title>
                </div>
            </div>
        </Link>
    );
};
