import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "../Icon/Icon";
import styles from "./Breadcrumb.module.scss";
import { IconLink } from "./IconLink";
import { Text } from "../Text/Text";
import { LinkType } from "../../../utils/parseUrl";

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
                    <>
                        <Icon name="arrowRight" width={5} height={8} className={styles.arrow} key={item.name} />
                        <li className={styles.linkItem}>
                            <Text size="small" color="grey-text-color">
                                <Link href={item.link}>{item.name}</Link>
                            </Text>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};
