import React from "react";
import { Text } from "@elements/Text";
import styles from "./Error.module.scss";
import { useCssClasses } from "../../../utils/getClassnames";

type ErrorProps = {
    description?: string;
    isAdaptive?: boolean;
    className?: string;
};

export const Error: React.FC<ErrorProps> = ({ description, isAdaptive = false, className }) => {
    const errorClasses = useCssClasses([styles.error, isAdaptive && styles.adaptive, className]);

    return (
        <div className={errorClasses}>
            <div className={styles.errorMessage}>{description && <Text>{description}</Text>}</div>
        </div>
    );
};
