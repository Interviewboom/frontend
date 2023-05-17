import { useMemo } from "react";

import { Logo } from "@elements/Logo";

import styles from "./Footer.module.scss";
import { FooterDown } from "./FooterDown";
import { NavigationList } from "./NavigationList";

export const Footer = () => {
    const companyItems = useMemo(
        () => [
            { name: "All tests" },
            { name: "How does it work?" },
            { name: "About the project" },
            { name: "Support the project" },
        ],
        []
    );
    const supportItems = useMemo(() => [{ name: "Feedback" }, { name: "denisostapiv@gmail.com" }], []);

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Logo template="light" redirectToHome />

                <div className={styles.navigation}>
                    <NavigationList title="We are on social networks" />
                    <NavigationList title="Company" items={companyItems} />
                    <NavigationList title="Technical support" items={supportItems} />
                </div>
            </div>

            <FooterDown />
        </footer>
    );
};
