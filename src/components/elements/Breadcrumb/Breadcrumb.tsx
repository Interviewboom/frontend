import Link from "next/link";
import React, { FC, Fragment } from "react";

import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { LinkType } from "@utils/parseUrl";

import styles from "./Breadcrumb.module.scss";
import { IconLink } from "./IconLink";

interface BreadcrumbProps {
    links: LinkType[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.home}>
                    <IconLink href="/">
                        <Icon name="home" width={18} height={17} />
                    </IconLink>
                </li>
                {links.map(item => (
                    <Fragment key={item.link}>
                        <Icon name="arrowRight" width={5} height={8} className={styles.arrow} />
                        <li className={styles.linkItem}>
                            <Text size="small" color="greyTextColor">
                                <Link href={item.link} legacyBehavior>
                                    {item.name}
                                </Link>
                            </Text>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};
