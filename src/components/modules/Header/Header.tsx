import { useEffect, useState } from "react";

import { Logo } from "@elements/Logo";
import { getClassnames } from "src/utils/getClassnames";

import { Auth } from "./components/Auth";
import { Navigation } from "./components/Navigation";
import styles from "./Header.module.scss";

export const Header = () => {
    const [showBurgerMenu, updateShowNurgerMenu] = useState(false);

    const actionToShowBurgerMenu = () => {
        updateShowNurgerMenu(value => !value);
    };

    const actionToCloseBurgerMenu = () => {
        updateShowNurgerMenu(false);
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
        <header className={getClassnames([styles.header, showBurgerMenu && styles.headerShowBurger])}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <Logo redirectToHome />
                </div>
                <Navigation actionToCloseBurgerMenu={actionToCloseBurgerMenu} />
                <Auth />
            </div>
            <div className={styles.mobileWarpper}>
                <Logo redirectToHome />
                <button
                    className={styles.burgerBtn}
                    onClick={actionToShowBurgerMenu}
                    type="button"
                    aria-label="button"
                />
            </div>
        </header>
    );
};
