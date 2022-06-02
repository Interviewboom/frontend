import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "../Icon/Icon";

import styles from "./Breadcrumb.module.scss";
import { IconLink } from "./IconLink";
import { Text } from "../Text/Text";

type LinkType = { link: string; name: string };

export const Breadcrumb = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<LinkType[]>([]);

    useEffect(() => {
        const pathArray = router.asPath.split("/").filter(path => path !== "");
        console.log(pathArray);

        const links = pathArray.map((path, index) => {
            const link = `/${pathArray.slice(0, index + 1).join("/")}`;
            return {
                link,
                name: path.charAt(0).toUpperCase() + path.slice(1),
            };
        });
        setBreadcrumbs(links);
    }, [router.asPath]);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.home}>
                    <IconLink href="/">
                        <Icon name="home" width={18} height={17} />
                    </IconLink>
                </li>
                {breadcrumbs.map(item => (
                    <>
                        <Icon name="arrowRight" width={5} height={8} />
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
