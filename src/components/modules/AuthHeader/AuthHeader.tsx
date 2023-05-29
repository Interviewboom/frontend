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
                <Icon name="arrowLeft" width={10} height={10} className={styles.arrowLeftIcon} />
                <button type="button" className={styles.backBtnText}>
                    back
                </button>
            </div>
            <div className={styles.logo}>{logoComponent}</div>
        </div>
    );
};
