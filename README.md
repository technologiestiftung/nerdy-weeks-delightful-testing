# Nerdy Weeks - Delightful Testing

<img src="assets/images/nerdy-weeks-delightful-testing-768.png">

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Nerdy Weeks - Delightful Testing](#nerdy-weeks---delightful-testing)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Additional Modules](#additional-modules)
  - [Folders](#folders)
  - [Eslint & Prettier Reminder](#eslint--prettier-reminder)

<!-- /code_chunk_output -->
## Prerequisites


- git v2 or greater
- NodeJS v10 or greater
- npm v6 or greater
- VSCode latest
  
Test if they exists - fix it if they don't.

```bash
git --version
node --version
npm --version
code --version
```


## Setup

```bash
git clone git@github.com:technologiestiftung/nerdy-weeks-delightful-testing.git
cd nerdy-weeks-delightful-testing
npx lerna bootstrap
```

## Additional Modules

In addition to our setup for typescript, eslint and prettier

```bash
npm install eslint typescript ts-node-dev prettier eslint-plugin-prettier eslint-config-prettier --save-dev
npx tsc --init
npx eslint --init
# don't forget to configure eslint to honor prettier
```


We also need to install some additional modules for running tests.

```bash
npm install jest ts-jest @types/jest eslint-plugin-jest --save-dev
```

In case of our API (folder server) we will also install `supertest` and its types

```bash
npm install supertest @types/supertest --save-dev
```

We need to initialize ts-jest by running the following command.

```bash
npx ts-jest config:init
```

We need to adjust our `.eslintrc.js`

```js
module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true, // <-This is new
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", 
    "plugin:jest/recommended", // <-This is new
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "jest",  // <-This is new
    ],
  rules: {},
};

```

## Folders

In this setup you will again find some bootstrapped folders under the `./start/` folder.


```plain
.
├── workflow-commit-data
├── .github
│   └── workflows
├── final
│   └── [and all the results are here]
└── start
    ├── server
    ├── client
    │   ├── public
    └── testing
        ├── ex2
        └── ex1
```

## Eslint & Prettier Reminder

Make sure that your eslint and prettier extensions are working properly. Add the following line to your `settings.json`

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "typescript",
    "javascript",
    "javascriptreact",
    "typescriptreact"
  ]
}
```