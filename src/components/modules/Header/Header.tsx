import { useState } from "react";
import { Logo } from "@elements/Logo";
import { getClassnames } from "src/utils/getClassnames";
import styles from "./Header.module.scss";
import { Auth } from "./Auth";
import { Navigation } from "./Navigation";
// import MobileMenu from "./MobileMenu";

export const Header = () => {
    const [showBurgerMenu, updateShowNurgerMenu] = useState(false);

    const actionToShowBurgerMenu = () => {
        updateShowNurgerMenu(value => !value);
    };

    const actionToCloseBurgerMenu = () => {
        updateShowNurgerMenu(false);
    };

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
            {/* <MobileMenu /> */}
        </header>
    );
};
