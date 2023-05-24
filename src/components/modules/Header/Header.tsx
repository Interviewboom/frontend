import { Logo } from "@elements/Logo";

import { Auth } from "./Auth";
import styles from "./Header.module.scss";
import MobileMenu from "./MobileMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo redirectToHome />
                <Navigation />
                <Auth />
            </div>
            <MobileMenu />
        </header>
    );
};
