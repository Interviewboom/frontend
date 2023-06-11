import { useState, useEffect } from "react";

type Breakpoint = "extraSmall" | "small" | "medium" | "large";

export const useBreakpoint = (): {
    extraSmall: boolean;
    small: boolean;
    medium: boolean;
    large: boolean;
    gteExtraSmall: boolean;
    gteMedium: boolean;
    lteSmall: boolean;
    lteMedium: boolean;
    lteLarge: boolean;
} => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let breakpoint: Breakpoint = "extraSmall";

    if (windowWidth >= 1200) {
        breakpoint = "large";
    } else if (windowWidth >= 992) {
        breakpoint = "medium";
    } else if (windowWidth >= 768) {
        breakpoint = "small";
    }

    const extraSmall = breakpoint === "extraSmall";
    const small = breakpoint === "small";
    const medium = breakpoint === "medium";
    const large = breakpoint === "large";

    const gteExtraSmall = breakpoint !== "extraSmall";
    const gteMedium = breakpoint !== "extraSmall" && breakpoint !== "small";
    const lteSmall = breakpoint !== "medium" && breakpoint !== "large";
    const lteMedium = breakpoint === "extraSmall" || breakpoint === "small";
    const lteLarge = breakpoint === "extraSmall" || breakpoint === "small" || breakpoint === "medium";

    return {
        extraSmall,
        small,
        medium,
        large,
        gteExtraSmall,
        gteMedium,
        lteSmall,
        lteMedium,
        lteLarge,
    };
};
