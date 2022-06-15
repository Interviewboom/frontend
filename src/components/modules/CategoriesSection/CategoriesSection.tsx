import { FC } from "react";
import CategoryCard, { TestCategory } from "./CategoryCard";
import { Title } from "../../elements/Title/Title";
import { Button } from "../../elements/Button/Button";
import styles from "./CategoriesSection.module.scss";

type CategoriesProps = {
    categories: TestCategory[];
};

const CategoriesSection: FC<CategoriesProps> = ({ categories }) => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2}>Test categories</Title>
                <div className={styles.categories}>
                    {categories && categories.map(item => <CategoryCard category={item} key={item.id} />)}
                </div>

                <div className={styles.btnWrapper}>
                    <Button link="/all-categories">More categories</Button>
                </div>
            </div>
        </section>
    );
};
export default CategoriesSection;
