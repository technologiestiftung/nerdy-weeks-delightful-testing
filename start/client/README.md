# Testing the client
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Additional Software and files

### @testing/library user events

For simulating clicks

```bash
npm i @testing-library/user-event --save-dev
```



### Storybook

[Storybook](https://storybook.js.org/) tool for developing in isolation

#### Install & Configure

```bash
npx sb init && npm run storybook
```

Will create some file under `src/stories` as demo
Will create folder `.storybook` for config
Some addons for integration with Jest `npm install @storybook/addon-storyshots react-test-renderer --save-dev`

Add file `storyshots.test.ts` in src with

```typescript
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```

Add your own stories based on examples.


### MSW (Mock Service Worker)

For API mocking

#### Install & Configure

```bash
npm install msw --save-dev
mkdir -p src/mocks
touch src/mocks/{browser,handler,server}.ts
```

content of `src/mocks/browser.ts`

```typescript
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

```

content of `src/mocks/server.ts`

```typescript
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers);

```

content of `src/mocks/handler.ts`

```typescript
import { rest } from "msw";

let host = "";
if (typeof global.process === "undefined") {
  host = window.location.origin;
}

// define more resolvers gere
export const handlers = [
    rest.get(`${host}/api/foods`, (req, res, ctx) => {
  return res(
      ctx.status(202, "Mocked status"),
      ctx.json({
        fruits: {
          data: ["Mock Mango"],
        },
        message: "Mocked response JSON body",
      })
    )];
```


## Fixing some issues with Jest

jest-environment-jsdom-sixteen
