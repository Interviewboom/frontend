import React, { FC } from "react";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title";

import styles from "./ResetPasswordSuccess.module.scss";

export const ResetPasswordSuccess: FC = () => {
    return (
        <div className={styles.successMessageWrapper}>
            <Title level={1} className={styles.title}>
                Done!
            </Title>
            <Text className={styles.message}>
                Your password has been successfully changed, thank you for being with us!
            </Text>
        </div>
    );
};
