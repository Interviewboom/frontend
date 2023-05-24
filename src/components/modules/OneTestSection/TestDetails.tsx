import React, { FC } from "react";

import { Button } from "@elements/Button/Button";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { useNewSession } from "@utils/useNewSession";

import styles from "./TestDetails.module.scss";

export const TestDetails: FC<{ numOfQuestions?: number }> = ({ numOfQuestions }) => {
    const startTest = useNewSession();

    return (
        <>
            <div className={styles.infoWrapper}>
                <div className={styles.iconCaption}>
                    <Icon name="alarm" width={20} height={20} className={styles.marginRight} />
                    <Text>{numOfQuestions ?? 10} questions</Text>
                </div>
                <div className={styles.iconCaption}>
                    <Icon name="alarm" width={20} height={20} className={styles.marginRight} />
                    <Text>Basic level</Text>
                </div>
            </div>
            <div className={styles.iconCaption}>
                <Icon name="translation" width={22} height={22} className={styles.marginRight} />
                <Text>English, Ukrainian</Text>
            </div>
            <div className={styles.button}>
                <Button onClick={startTest}>Start the test</Button>
            </div>
        </>
    );
};
