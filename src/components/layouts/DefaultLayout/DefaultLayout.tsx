import type { FC, ReactNode } from "react";

import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";

import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
    children: ReactNode;
    error?: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, error }) => {
    return (
        <div className={styles.main}>
            <Header />
            <div>{error || children}</div>
            <Footer />
        </div>
    );
};
