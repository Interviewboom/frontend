import { useMemo } from "react";
import { Logo } from "@elements/Logo";

import { FooterDown } from "./FooterDown";
import { NavigationList } from "./NavigationList";

import styles from "./Footer.module.scss";

export const Footer = () => {
    const companyItems = useMemo(
        () => [{ name: "Всі тести" }, { name: "Як це працює?" }, { name: "Про проект" }, { name: "Підтримати проект" }],
        []
    );
    const supportItems = useMemo(() => [{ name: "Зворотній зв’язок" }, { name: "denisostapiv@gmail.com" }], []);

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Logo template="light" />

                <div className={styles.navigation}>
                    <NavigationList title="Ми в соц мережах" />
                    <NavigationList title="Компанія" items={companyItems} />
                    <NavigationList title="Тех. підртрика" items={supportItems} />
                </div>
            </div>

            <FooterDown />
        </footer>
    );
};
