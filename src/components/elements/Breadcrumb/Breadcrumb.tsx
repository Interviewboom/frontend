import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "../Icon/Icon";

import styles from "./Breadcrumb.module.scss";
import { IconLink } from "./IconLink";
import { Text } from "../Text/Text";
import { parseUrl, LinkType } from "../../../utils/parseUrl";

interface BreadcrumbProps {
    linksArray?: LinkType[];
    captions: string[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ linksArray, captions }) => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<LinkType[]>([]);

    useEffect(() => {
        if (!linksArray) {
            const urlString = router.asPath;
            const pathArray = parseUrl(urlString);
            setBreadcrumbs(pathArray);
        } else {
            setBreadcrumbs(linksArray);
        }
    }, [router.asPath, linksArray]);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.home}>
                    <IconLink href="/">
                        <Icon name="home" width={18} height={17} />
                    </IconLink>
                </li>
                {breadcrumbs.map((item, index) => (
                    <>
                        <Icon name="arrowRight" width={5} height={8} />
                        <li className={styles.linkItem}>
                            <Text size="small" color="grey-text-color">
                                <Link href={item.link}>{captions[index] ?? item.name}</Link>
                            </Text>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};
