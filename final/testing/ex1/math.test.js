// stolen from testingjsvascript.com Fundamentals of testing
// step 1 assert on results vs expected
const { add, subtract, addAsync, subtractAsync } = require("./math.js");

let result = add(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(10, 3);
expected = 7;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

// step 2 replace the
// code duplication with function write funtion expected

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

// step 3 tests are not run when they throw in the main function
// we also cant find the location of the error in the stack trace since it calls the expect function
// after that refactor the existing code the be run by our test function

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

// step 4 make this also work with async functions
// wee need to:
// - make the test async
// - await the callback
// – make the callback where the test is in async
// - change from add to addAsync and await that
// - change from subtract to subtractAsync and await that

// --------- below is the actual final result -----------
/**
 * This is the function you use to create tests
 * pass in your test function as the callback.
 * It can be an async function
 * @example
 * test("this is the title", async()=>{
 *   // assertion goes here
 * })
 */
/*
async function test(title: string, callback: () => void | Promise<void>) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

*/
/**
 * This is the assertion you make about your code
 * @example
 * expect(true).toBe(true)
 * expect(2 + 2).toBe(4)
 */

// function expect(actual: number | string | boolean) {
//   return {
//     toBe(expected: number | string | boolean) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`);
//       }
//     },
//   };
// }

/**
 * How to use them together
 *
 */
// test("2 + 2 should be 4", () => {
//   expect(add(2, 2)).toBe(4);
// });
// test("5 - 3 should be 2", () => {
//   expect(subtract(5, 3)).toBe(2);
// });

// test("2 + 2 should be 4 async", async () => {
//   expect(addAsync(2, 2)).toBe(4);
// });

// test("2 + 2 should be 4 async", async () => {
//   expect(subtractAsync(5, 3)).toBe(2);
// });
