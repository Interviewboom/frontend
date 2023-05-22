import { useMemo } from "react";

import { Text } from "@elements/Text";

import styles from "./FooterDown.module.scss";
import { UserPolicy } from "./UserPolicy";

export const FooterDown = () => {
    const currentYear = useMemo(() => {
        const date = new Date();

        return date.getFullYear();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Text color="light-text-color">© {currentYear} InterviewBoom</Text>

                <UserPolicy />
            </div>
        </div>
    );
};
