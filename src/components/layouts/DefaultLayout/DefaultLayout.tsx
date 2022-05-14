import type { FC, ReactNode } from "react";

import { Header } from "@modules/Header";

interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};
