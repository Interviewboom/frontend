import { Logo } from "@elements/Logo";
import { Auth } from "./Auth";
import { Navigation } from "./Navigation";

import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                <Navigation />
                <Auth />
            </div>
        </header>
    );
};
