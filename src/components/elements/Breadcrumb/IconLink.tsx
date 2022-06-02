import React, { ReactNode } from "react";

type IconLinkProps = {
    children: ReactNode;
    href?: string;
};

export const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(({ children, href }, ref) => {
    return (
        <a ref={ref} href={href}>
            {children}
        </a>
    );
});
