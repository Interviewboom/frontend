## Commit Message Convention

Commit message will be checked using [husky and commit lint](https://theodorusclarence.com/library/husky-commitlint-prettier), you can't commit if not using the proper convention below.

### Format

`<type>(optional scope): <description>`
Example: `docs(commitlint): add commit message conventions`

### 1. Type

Available types are:

# Types

| Type       | Description |
|:----------:|-------------|
| `feat`     | Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page` |
| `fix`      | Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view` |
| `ci`       | Update github workflows, husky |
| `perf`     | Fixing something regarding performance (deriving state, using memo, callback) |
| `style`    | Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments) |
| `breaking` | For backwards-incompatible enhancement commit |
| `i18n`     | For i18n (internationalization) commit |
| `a11y`     | For a11y (accessibility) commit |
| `refactor` | Changes in code, same output, but different approach |
| `docs`     | Update documentation (README.md) |
| `example`  | For example code commit |
| `test`     | Update testing suite |
| `revert`   | When reverting commits |
| `wip`      | For work in progress commit |
| `chore`    | Installing new dependencies, or bumping deps |


### 2. (Optional) Scope

The scope could be anything specifying place or category of the commit change.

`style(sign-in): update opacity`

\*If there is no scope needed, you don't need to write it

### 3. Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

**If there are multiple changes, then commit one by one**

