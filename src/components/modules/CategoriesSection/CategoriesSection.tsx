import { FC } from "react";
import Link from "next/link";
import { Text } from "@elements/Text/Text";
import { Title } from "@elements/Title/Title";
import { Button } from "@elements/Button/Button";
import styles from "./CategoriesSection.module.scss";
import { CategoryCard, TestCategory } from "./CategoryCard";

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
                <div className={styles.categories}>
                    {categories ? (
                        categories.map(item => (
                            <Link href={`${item.name}-category`} key={item.id} passHref>
                                <CategoryCard category={item} />
                            </Link>
                        ))
                    ) : (
                        <Text>failed to load categories</Text>
                    )}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-categories">More categories</Button>
                </div>
            </div>
        </section>
    );
};
