module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "chore",
                "style",
                "refactor",
                "ci",
                "test",
                "revert",
                "perf",
                "i18n",
                "a11y",
                "breaking",
                "example",
                "wip",
            ],
        ],
    },
};
