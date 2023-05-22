import Image from "next/legacy/image";
import { FC } from "react";

import { Breadcrumb } from "@elements/Breadcrumb/Breadcrumb";
import { Icon } from "@elements/Icon";
import { ShareButton } from "@elements/ShareButton";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { TestModel } from "src/models/entities/test-model/test-model";

import styles from "./OneTestSection.module.scss";
import { TestDetails } from "./TestDetails";

type OneTestSectionProps = {
    category: TestCategoryModel;
    oneTestInfo: TestModel;
};

export const OneTestSection: FC<OneTestSectionProps> = ({ oneTestInfo, category }) => {
    return (
        <section className={styles.section}>
            {oneTestInfo && (
                <div className={styles.wrapper}>
                    <div className={styles.breadcrumbsWrapper}>
                        <Breadcrumb
                            links={[
                                { name: "Test categories", link: "/categories" },
                                { name: category.title, link: `/categories/${category.id}` },
                                { name: oneTestInfo.title, link: `/categories/${category.id}/test/${oneTestInfo.id}` },
                            ]}
                        />
                    </div>
                    <div className={styles.socialsWrapper}>
                        <div className={styles.favorites}>
                            <Icon name="favorites" width={20} height={19} className={styles.iconMargin} />
                            <Text>Favorites</Text>
                        </div>

                        <ShareButton />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src="/assets/images/tests/2.jpg"
                                alt={oneTestInfo.title}
                                width={600}
                                height={348}
                                layout="responsive"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div className={styles.content}>
                            <Title level={2} className={styles.title}>
                                {oneTestInfo.title}
                            </Title>

                            <Text isParagraph lineHeight={24} className={styles.textMargin}>
                                {oneTestInfo.description}
                            </Text>

                            <TestDetails numOfQuestions={oneTestInfo.questions?.length} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
