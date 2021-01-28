# Challenging Cypress

## ドキュメント

### CLI
- [Command Line | Cypress Documentation](https://docs.cypress.io/guides/guides/command-line.html#Installation)

### cypress.json
- [Configuration | Cypress Documentation](https://docs.cypress.io/guides/references/configuration.html#Options)

### 環境変数
- [Environment Variables | Cypress Documentation](https://docs.cypress.io/guides/guides/environment-variables.html#Setting)

## ディレクトリ構成例
- https://gist.github.com/alfredlucero/53783a6847cede23ccd8d762d4692d3e より。

```
// /cypress - to hold all things Cypress i.e. tests, fixtures, page objects, utils, plugins, commands
// |--> /fixtures - JSON files of common data objects needed in tests
// |--> /integration - all of our tests, we would often create sub-folders per page/feature or even by group of tests
// |--> /pages - page objects and each feature would often have its own sub-folder for the pages related to it
// |--> /plugins - custom plugins to run in a Node server, each feature/page would have its own sub-folder for API teardown/setup
// |--> /support - custom commands and types here
// |--> /utils - extra utility files to be used throughout
// |--> /config - environment configuration JSON files to extend/override the base cypress.json file - not all teams did this but it's another approach
```
