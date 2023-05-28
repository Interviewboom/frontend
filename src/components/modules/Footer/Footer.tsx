import { useMemo } from "react";

import { Icon } from "@elements/Icon";
import { Logo } from "@elements/Logo";

import styles from "./Footer.module.scss";
import { NavigationList } from "./NavigationList";
import { UserPolicy } from "./UserPolicy";

export const Footer = () => {
    const companyItems = useMemo(
        () => [
            { name: "The platform", link: "/" },
            { name: "Twitter", link: "/" },
            { name: "Our Tests", link: "/categories" },
            { name: "Instagram", link: "/" },
            { name: "Get in touch", link: "/" },
            { name: "Facebook", link: "/" },
        ],
        []
    );

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Logo template="light" redirectToHome />
                <div className={styles.ua}>
                    <span className={styles.heartContainer}>
                        <Icon
                            className={styles.heart}
                            name="whiteHeart"
                            width={20}
                            height={20}
                            stroke="white"
                            color="white"
                        />
                    </span>
                    <div className={styles.description}>
                        <p>With love from UKRAINE</p>
                        <span>#UADevs</span>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <NavigationList items={companyItems} />
                    <p className={styles.designer}>
                        Design by
                        <a
                            className={styles.designerLink}
                            href="https://www.behance.net/xdreamer121"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Denys Brustovskyi
                        </a>
                    </p>
                    <UserPolicy />
                </div>
                <span className={styles.rights}>All rights reserved. ©2023</span>
            </div>
        </footer>
    );
};
