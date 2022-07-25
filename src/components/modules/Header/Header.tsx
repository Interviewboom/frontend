import { Logo } from "@elements/Logo";
import { Auth } from "./Auth";
import { Navigation } from "./Navigation";
import styles from "./Header.module.scss";
import MobileMenu from "./MobileMenu";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                <Navigation />
                <Auth />
            </div>
            <MobileMenu />
        </header>
    );
};
