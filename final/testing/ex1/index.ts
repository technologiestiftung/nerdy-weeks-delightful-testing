const assert = require("assert").strict;

function add(a: number, b: number): number {
  return a + b;
}

function merge(a: any, b: any) {
  return Object.assign(a, b);
}

try {
  assert.ok(add(2, 4) === 4, "Should return 4");
} catch (error) {
  if (error instanceof assert.AssertionError) {
  }
  console.error(
    error.message,
    "Expected:",
    error.expected,
    "But got",
    error.actual
  );
}

try {
  assert.deepStrictEqual(
    merge({ name: "Han" }, { shortFirst: true }),
    { name: "Han", shortFirst: false },
    "Merged object should be the same,"
  );
} catch (error) {
  console.error(
    error.message,
    "Expected:",
    error.expected,
    "But got",
    error.actual
  );
}

/**
 * This is the function you use to create tests
 * pass in your test function as the callback.
 * It can be an async function
 * @example
 * test("this is the title", async()=>{
 *   // assertion goes here
 * })
 */
async function test(title: string, callback: () => void | Promise<void>) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

/**
 * This is the assertion you make about your code
 * @example
 * expect(true).toBe(true)
 * expect(2 + 2).toBe(4)
 */
function expect(actual: number | string | boolean) {
  return {
    toBe(expected: number | string | boolean) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

/**
 * How to use them together
 *
 */
test("2 + 2 should be 4", () => {
  expect(2 + 2).toBe(4);
});
