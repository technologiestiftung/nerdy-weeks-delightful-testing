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
