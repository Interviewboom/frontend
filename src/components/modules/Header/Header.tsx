import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Logo } from "@elements/Logo";
import { getClassnames } from "src/utils/getClassnames";

import { Auth } from "./components/Auth";
import { Navigation } from "./components/Navigation";
import styles from "./Header.module.scss";
import { AuthHeader } from "../AuthHeader";

export const Header = () => {
    const [showBurgerMenu, updateShowBurgerMenu] = useState(false);
    const router = useRouter();
    const isAuthPages = router.asPath.slice(1, 5) === "auth";

    const toggleBurgerMenu = () => {
        updateShowBurgerMenu(value => !value);
    };

    const closeBurgerMenu = () => {
        updateShowBurgerMenu(false);
    };

    useEffect(() => {
        const bodyElem = document.querySelector("body");
        if (bodyElem) {
            if (showBurgerMenu) {
                bodyElem.style.overflow = "hidden";
            } else {
                bodyElem.style.overflow = "initial";
            }
        }
    }, [showBurgerMenu]);

    return (
        <>
            {isAuthPages && <AuthHeader logoComponent={<Logo redirectToHome />} />}
            {!isAuthPages && (
                <header className={getClassnames([styles.header, showBurgerMenu && styles.headerShowBurger])}>
                    <div className={styles.wrapper}>
                        <div className={styles.logoWrapper}>
                            <Logo redirectToHome />
                        </div>
                        <Navigation closeBurgerMenu={closeBurgerMenu} />
                        <Auth />
                    </div>
                    <div className={styles.mobileWarpper}>
                        <Logo redirectToHome />
                        <button
                            className={styles.burgerBtn}
                            onClick={toggleBurgerMenu}
                            type="button"
                            aria-label="button"
                        />
                    </div>
                </header>
            )}
        </>
    );
};
