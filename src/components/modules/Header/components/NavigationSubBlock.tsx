import { FC, useState } from "react";

import { Icon } from "@elements/Icon";
import { ButtonLikeLink, Link } from "@elements/Link";
import { formatLink } from "@utils/formatLink";
import { getClassnames } from "src/utils/getClassnames";

import styles from "./Navigation.module.scss";
import { NavigationItem, NavigationProps } from "../Header.types";

export const NavigationSubBlock: FC<NavigationItem & NavigationProps> = ({ subList, moreLink, closeBurgerMenu }) => {
    const [showMobileSubMenu, updateShowMobileSubMenu] = useState<boolean>(false);

    const getBlockClasses = () => {
        return getClassnames([styles.navigationSubBlock, showMobileSubMenu && styles.active]);
    };

    if (subList) {
        return (
            <>
                <button type="button" className={styles.mobileMoreBtn} onClick={() => updateShowMobileSubMenu(true)}>
                    <Icon name="arrowRightLong" className={styles.icon} width={12} height={12} />
                </button>
                <div className={getBlockClasses()}>
                    <ButtonLikeLink
                        className={styles.backButton}
                        withArrow="left"
                        withBorder
                        onClick={() => updateShowMobileSubMenu(false)}
                    >
                        <span>back</span>
                    </ButtonLikeLink>
                    <ul className={styles.navigationSubBlockList}>
                        {subList.map(subItem => (
                            <li key={subItem.name}>
                                <Link
                                    href={formatLink(subItem.link)}
                                    classNameText={styles.navigationSubBlockLink}
                                    onClick={closeBurgerMenu}
                                >
                                    <Icon className={styles.icon} name={subItem.icon} width={33} height={33} />
                                    {subItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {moreLink ? (
                        <Link
                            className={styles.moreLink}
                            href={formatLink(moreLink.link)}
                            withArrow="right"
                            onClick={closeBurgerMenu}
                        >
                            {moreLink.name}
                        </Link>
                    ) : null}
                </div>
            </>
        );
    }

    return null;
};
