// Navigation links
const LINK_HOME = "/";
const ANCHOR_THE_PLATFORM = "#about";
const LINK_OUR_TESTS = "/all-tests";
const ANCHOR_GET_IN_TOUCH = "#contact";
const LINK_OUR_TESTS_SUB_LIST_MORE = "/all-tests";

const SUB_LIST_OUR_TESTS = [
    {
        name: "JavaScript",
        icon: "javascript",
        link: "#javascript",
    },
    {
        name: "PHP",
        icon: "php",
        link: "#php",
    },
    {
        name: "C++",
        icon: "c++",
        link: "#c++",
    },
];

const SUB_OUR_TESTS_LIST_MORE = { name: "Browse all", link: LINK_OUR_TESTS_SUB_LIST_MORE };

const NAVIGATION_HOME = { name: "Home", link: LINK_HOME };
const NAVIGATION_THE_PLATFORM = { name: "The platform", link: ANCHOR_THE_PLATFORM };
const NAVIGATION_OUR_TESTS = {
    name: "Our tests",
    link: LINK_OUR_TESTS,
    subList: SUB_LIST_OUR_TESTS,
    moreLink: SUB_OUR_TESTS_LIST_MORE,
};
const NAVIGATION_GET_IN_TOUCH = { name: "Support the project", link: ANCHOR_GET_IN_TOUCH };

export const NAVIGATION_ITEMS = [
    NAVIGATION_HOME,
    NAVIGATION_THE_PLATFORM,
    NAVIGATION_OUR_TESTS,
    NAVIGATION_GET_IN_TOUCH,
];

// Auth links
const LINK_SIGN_IN = "/auth/sign-in";
const LINK_SIGN_UP = "/auth/sign-up";

const AUTH_SIGN_IN = { name: "Sign in", link: LINK_SIGN_IN };
const AUTH_SIGN_UP = { name: "Sign up", link: LINK_SIGN_UP };

export const AUTH_ITEMS = [AUTH_SIGN_IN, AUTH_SIGN_UP];
