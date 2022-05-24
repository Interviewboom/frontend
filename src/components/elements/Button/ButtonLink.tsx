import React, { MouseEventHandler, ReactNode } from "react";
/* eslint  "jsx-a11y/anchor-is-valid": 0  
  "jsx-a11y/click-events-have-key-events": "off" ,
  "jsx-a11y/no-static-element-interactions": "off" 
 */
type ButtonLinkProps = {
    className: string;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
    ({ className, children, onClick }, ref) => {
        return (
            <a ref={ref} className={className} onClick={onClick}>
                {children}
            </a>
        );
    }
);
