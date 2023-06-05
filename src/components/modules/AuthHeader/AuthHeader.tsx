import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

import { Icon } from "@elements/Icon";

import styles from "./AuthHeader.module.scss";

interface AuthHeaderProps {
    logoComponent: ReactNode;
}

export const AuthHeader: FC<AuthHeaderProps> = ({ logoComponent }) => {
    const router = useRouter();

    function handleBack() {
        router.back();
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === "Enter") {
            handleBack();
        }
    }
    return (
        <div className={styles.container}>
            <div
                tabIndex={0}
                className={styles.backBtnContainer}
                onClick={handleBack}
                onKeyDown={handleKeyDown}
                role="button"
            >
                <Icon name="arrowLeft" width={12} height={12} className={styles.arrowLeftIcon} />
                <span className={styles.backBtnText}>back</span>
            </div>
            <div className={styles.logo}>{logoComponent}</div>
        </div>
    );
};
