import { FC } from "react";

import { Text } from "@elements/Text";
import { useCssClasses } from "@utils/getClassnames";

import styles from "./Error.module.scss";

type ErrorProps = {
    semiBold?: true | false;
    description: string;
    isAdaptive?: boolean;
    className?: string;
};

export const Error: FC<ErrorProps> = ({ semiBold = false, description, isAdaptive = false, className }) => {
    const errorClasses = useCssClasses([
        styles.error,
        semiBold && styles.semiBold,
        isAdaptive && styles.adaptive,
        className,
    ]);

    return (
        <div className={errorClasses}>
            <div className={styles.errorMessage}>
                <Text>{description}</Text>
            </div>
        </div>
    );
};
