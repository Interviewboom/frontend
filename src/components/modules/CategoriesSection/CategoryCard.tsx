import Image from "next/image";
import React, { forwardRef } from "react";
import { Text } from "@elements/Text/Text";

import styles from "./CategoryCard.module.scss";

export type TestCategory = {
    id: number;
    name: string;
    parent_id: number;
    title: string;
    parent: string | null;
};

type CategoryCardProps = {
    category: TestCategory;
    href?: string;
};

export const CategoryCard = forwardRef<HTMLAnchorElement, CategoryCardProps>(({ category, href }, ref) => {
    return (
        <a href={href} ref={ref}>
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
        </a>
    );
});
