import { ReactNode } from "react";

export type LinkTypes = {
    withArrow?: "left" | "right";
    withBorder?: boolean;
    href: string;
    children: ReactNode;
    className?: string;
    classNameText?: string;
    color?: "white";
    onClick?: () => void;
};
