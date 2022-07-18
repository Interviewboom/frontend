import { FC } from "react";

import Image from "next/image";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { Icon } from "@elements/Icon";
import { TestCategory, TestType } from "src/api/apiTypes";

import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { TestDetails } from "./TestDetails";

import styles from "./OneTestSection.module.scss";

type OneTestSectionProps = {
    test: TestType;
    category: TestCategory;
};

export const OneTestSection: FC<OneTestSectionProps> = ({ test, category }) => {
    return (
        <section className={styles.section}>
            {test && (
                <div className={styles.wrapper}>
                    <div className={styles.breadcrumbsWrapper}>
                        <Breadcrumb
                            links={[
                                { name: "Test categories", link: "/categories" },
                                { name: category.title, link: `/categories/${category.id}` },
                                { name: test.title, link: `/categories/${category.id}/${test.title}` },
                            ]}
                        />
                    </div>
                    <div className={styles.socialsWrapper}>
                        <div className={styles.favorites}>
                            <Icon name="favorites" width={20} height={19} className={styles.iconMargin} />
                            <Text>Favorites</Text>
                        </div>

                        <div className={styles.share}>
                            <Icon name="share" width={18} height={15} className={styles.iconMargin} />
                            <Text>Share</Text>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/assets/images/tests/2.jpg"
                                alt={test.title}
                                width={600}
                                height={348}
                                layout="responsive"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div className={styles.content}>
                            <Title level={2} className={styles.title}>
                                {test.title}
                            </Title>

                            <Text isParagraph lineHeight={24} className={styles.textMargin}>
                                {test.description}
                            </Text>

                            <TestDetails numOfQuestions={test.questions?.length} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
