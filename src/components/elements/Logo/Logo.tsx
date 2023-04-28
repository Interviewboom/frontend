import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

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
        <div className={styles.wrapper}>
            <Image
                alt="Logo"
                src={`/assets/images/logo${template === "light" ? "-light" : ""}.svg`}
                width={293}
                height={30}
                onClick={() => handleClick()}
            />
        </div>
    );
};
