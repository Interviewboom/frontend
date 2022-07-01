import Image from "next/image";
import React, { forwardRef } from "react";

import { Title } from "@elements/Title/Title";
import { TestCategory } from "@utils/apiTypes";

import styles from "./CategoryCard.module.scss";

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
                    <Title level={5}>{category.title}</Title>
                </div>
            </div>
        </a>
    );
});
