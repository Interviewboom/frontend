import { useRouter } from "next/router";

import { Logo } from "@elements/Logo";

import { Auth } from "./Auth";
import styles from "./Header.module.scss";
import MobileMenu from "./MobileMenu";
import { Navigation } from "./Navigation";
import { AuthHeader } from "../AuthHeader";

export const Header = () => {
    const router = useRouter();
    const isAuthPages = router.asPath.slice(1, 5) === "auth";
    return (
        <>
            {isAuthPages && <AuthHeader logoComponent={<Logo redirectToHome />} />}
            {!isAuthPages && (
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <Logo redirectToHome />
                        {!isAuthPages && <Navigation />}
                        {!isAuthPages && <Auth />}
                    </div>
                    <MobileMenu />
                </header>
            )}
        </>
    );
};
