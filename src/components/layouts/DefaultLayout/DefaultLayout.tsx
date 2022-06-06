import type { FC, ReactNode } from "react";

import { Header } from "@modules/Header";
import { Footer } from "@modules/Footer";

interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};
