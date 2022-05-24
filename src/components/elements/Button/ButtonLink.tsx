import React, { MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    href: string;
    className: string;
    children: ReactNode;
};

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
    ({ onClick, href, className, children }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref} className={className}>
                {children}
            </a>
        );
    }
);
