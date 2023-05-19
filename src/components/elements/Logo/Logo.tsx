import { FC } from "react";

import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./Logo.module.scss";

interface LogoProps {
    template?: "dark" | "light";
    redirectToHome?: boolean;
}

export const Logo: FC<LogoProps> = ({ template = "dark", redirectToHome = false }) => {
    const router = useRouter();

    const themeColor = template === "dark" ? "#16161F" : "#F5F5F5";

    function handleClick() {
        if (redirectToHome) {
            router.push("/");
        }
    }
    return (
        <h2 className={styles.logo}>
            <button type="button" style={{ color: themeColor }} onClick={handleClick}>
                InterviewBoom
            </button>
        </h2>
    );
};
