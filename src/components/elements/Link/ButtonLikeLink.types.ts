import { ReactNode } from "react";

export type ButtonLikeLinkTypes = {
    withArrow?: "left" | "right";
    withBorder?: boolean;
    children: ReactNode;
    className?: string;
    classNameText?: string;
    color?: "white";
    onClick?: () => void;
};
