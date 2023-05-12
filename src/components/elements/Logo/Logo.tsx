import { FC } from "react";

import { useRouter } from "next/router";

import styles from "./Logo.module.scss";

interface LogoProps {
    template?: "dark" | "light";
    redirectToHome?: boolean;
}

export const Logo: FC<LogoProps> = ({ template = "dark", redirectToHome = false }) => {
    const router = useRouter();

    function handleClick() {
        if (redirectToHome) {
            router.push("/");
        }
    }
    return (
        <h2 className={styles.logo}>
            <button
                type="button"
                className={`${template === "dark" ? styles.dark : styles.light}`}
                onClick={handleClick}
            >
                InterviewBoom
            </button>
        </h2>
    );
};
