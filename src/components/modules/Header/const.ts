// Navigation links
const LINK_ALL_TESTS = "/all-tests";
const LINK_HOW_IT_WORKS = "/how-it-works";
const LINK_ABOUT_US = "/about-us";
const LINK_SUPPORT_THE_PROJECT = "/support-the-project";

const NAVIGATION_ALL_TESTS = { name: "Всі тести", link: LINK_ALL_TESTS };
const NAVIGATION_HOW_IT_WORKS = { name: "Як це працює", link: LINK_HOW_IT_WORKS };
const NAVIGATION_ABOUT_US = { name: "Про нас", link: LINK_ABOUT_US };
const NAVIGATION_SUPPORT_THE_PROJECT = { name: "Підтримати проект", link: LINK_SUPPORT_THE_PROJECT };

export const NAVIGATION_ITEMS = [
    NAVIGATION_ALL_TESTS,
    NAVIGATION_HOW_IT_WORKS,
    NAVIGATION_ABOUT_US,
    NAVIGATION_SUPPORT_THE_PROJECT,
];

// Auth links
const LINK_SIGN_IN = "/sign-in";
const LINK_SIGN_UP = "/sign-up";

const AUTH_SIGN_IN = { name: "Вхід", link: LINK_SIGN_IN };
const AUTH_SIGN_UP = { name: "Реєстрація", link: LINK_SIGN_UP };

export const AUTH_ITEMS = [AUTH_SIGN_IN, AUTH_SIGN_UP];