import type { FC, ReactNode } from "react";

import { Footer } from "@modules/Footer";
import { Header } from "@modules/Header";

interface DefaultLayoutProps {
    children: ReactNode;
    error?: string;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children, error }) => {
    return (
        <div>
            <Header />
            <div>{error || children}</div>
            <Footer />
        </div>
    );
};
