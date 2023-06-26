import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { FC, useState, MouseEventHandler } from "react";

import { Link } from "@elements/Link";
import { Text } from "@elements/Text";
import { formatLink } from "@utils/formatLink";
import { getNameAndInitial } from "@utils/getNameAndInitial";

import styles from "./Auth.module.scss";
import { AUTH_ITEMS, MENU_ITEMS } from "../helpers/const";

export const Auth: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const { data: session } = useSession();

    const userName: string = session?.user?.name || "";
    const userImage: string = session?.user?.image || "";

    const openMenuHandler = (): MouseEventHandler<HTMLUListElement> | void => {
        setIsMenuOpen(prev => !prev);
    };

    if (!session) {
        return (
            <ul className={styles.navigationList}>
                {AUTH_ITEMS?.map(
                    item =>
                        item.name === "Sign in" && (
                            <li key={item.name}>
                                <Link withArrow="right" href={formatLink(item.link)} className={styles.navigationLink}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                )}
            </ul>
        );
    }

    return (
        <div className={styles.navigationList}>
            <Text size="big" color="darkTextColor" className={styles.userName}>
                {getNameAndInitial(userName)}
            </Text>
            <Image
                className={isMenuOpen ? styles.opacity : ""}
                onClick={openMenuHandler}
                src={userImage}
                width={60}
                height={60}
                alt="User's avatar"
            />
            {isMenuOpen && (
                <ul>
                    {MENU_ITEMS?.map(item =>
                        item.name !== "Log Out" ? (
                            <li key={item.name}>
                                <Link color="darkTextColor" href={formatLink(item.link)}>
                                    {item.name}
                                </Link>
                            </li>
                        ) : (
                            <li key={item.name}>
                                <Link
                                    color="darkTextColor"
                                    withArrow="right"
                                    href={formatLink(item.link)}
                                    onClick={() => signOut()}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
};
