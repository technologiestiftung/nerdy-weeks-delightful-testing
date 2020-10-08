// this file configures the storybook preview
import "../src/index.css";
if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  console.log("starting MSW");
  // Start the mocking when each story is loaded.
  // Repetitive calls to the `.start()` method do not register a new worker,
  // but check whether there's an existing once, reusing it, if so.
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
