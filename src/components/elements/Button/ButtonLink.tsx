import React, { ReactNode } from "react";

type ButtonLinkProps = {
    className: string;
    children: ReactNode;
    href: string;
};

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ className, children, href }, ref) => {
    return (
        <a ref={ref} className={className} href={href}>
            {children}
        </a>
    );
});
