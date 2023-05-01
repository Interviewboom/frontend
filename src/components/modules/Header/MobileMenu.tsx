import React, { useState } from "react";
import { Icon } from "@elements/Icon/Icon";
import Link from "next/link";
import { Logo } from "@elements/Logo";

import styles from "./MobileMenu.module.scss";
import { NAVIGATION_ITEMS } from "./const";
import { Auth } from "./Auth";

const MobileMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [authOpened, setAuthOpened] = useState(false);

    const onMenuClick = () => {
        setMenuOpened(prev => !prev);
        setAuthOpened(false);
    };

    const onAuthClick = () => {
        setAuthOpened(prev => !prev);
        setMenuOpened(false);
    };

    return (
        <div className={styles.mobileWrapper}>
            <div className={styles.mobileMenuTop}>
                <button type="button" onClick={onMenuClick}>
                    <Icon name={menuOpened ? "close" : "menuIcon"} />
                </button>

                <Link href="/">
                    <div className={styles.mobileLogo}>
                        <Logo redirectToHome />
                    </div>
                </Link>
                <button type="button" onClick={onAuthClick}>
                    <Icon name="avatar" />
                </button>
            </div>

            {menuOpened && (
                <nav className={styles.menuList} {...(menuOpened ? { onClick: () => setMenuOpened(false) } : {})}>
                    <ul>
                        {NAVIGATION_ITEMS.map(item => (
                            <li key={item.name} className={styles.navigationItem}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {authOpened && <Auth />}
        </div>
    );
};

export default MobileMenu;
