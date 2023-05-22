import React from "react";

import { Text } from "@elements/Text";
import { useCssClasses } from "@utils/getClassnames";

import styles from "./Error.module.scss";

type ErrorProps = {
    description: string;
    isAdaptive?: boolean;
    className?: string;
};

export const Error: React.FC<ErrorProps> = ({ description, isAdaptive = false, className }) => {
    const errorClasses = useCssClasses([styles.error, isAdaptive && styles.adaptive, className]);

    return (
        <div className={errorClasses}>
            <div className={styles.errorMessage}>
                <Text>{description}</Text>
            </div>
        </div>
    );
};
