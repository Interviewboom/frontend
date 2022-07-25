import React, { useState } from "react";
import { Icon } from "@elements/Icon/Icon";
import Link from "next/link";
import { Logo } from "@elements/Logo";

import styles from "./MobileMenu.module.scss";
import { NAVIGATION_ITEMS } from "./const";

const MobileMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className={styles.mobileWrapper}>
            <div className={styles.mobileMenuTop}>
                {menuOpened ? (
                    <button
                        type="button"
                        onClick={() => {
                            setMenuOpened(false);
                        }}
                    >
                        <Icon name="close" />
                    </button>
                ) : (
                    <button type="button" onClick={() => setMenuOpened(true)} className={styles.openMenuButton}>
                        <Icon name="menuIcon" />
                    </button>
                )}
                <div className={styles.mobileLogo}>
                    <Logo />
                </div>
            </div>

            {menuOpened && (
                <nav className={styles.menuList}>
                    <ul>
                        {NAVIGATION_ITEMS.map(item => (
                            <li className={styles.navigationItem}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
