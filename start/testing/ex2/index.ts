/**
 * Write a function that adds to numbers together
 */
export function add(a: number, b: number): number {
  return a + b;
}

// /**
//  * Write a function that subtracts one number from the other
//  */
export function subtract(a: number, b: number): number {
  return a - b;
}

// /**
//  * Write a function that selects something from an array of generics
//  * if the item does not exsist return undefined
//  */
export function select<T>(i: number, items: T[]): T | undefined {
  return items[i];
}

// /**
//  * Write a function that returns a string of a specific length
//  */
export function randomString(len: number): string {
  const source =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"§$%&/()=';
  let res = "";
  for (let i = 0; i < len; i++) {
    res += source.charAt(Math.floor(Math.random() * source.length));
  }
  return res;
}

// /**
//  * Wirte a function that returns an object with a random number and a random string
//  */
export function randomValues(): { value: number; str: string } {
  return {
    value: Math.random() * 1000,
    str: randomString(Math.random() * 100),
  };
}

// /**
//  * Write a function that returns always the same object
//  */

export function somethingShouldBeStatic(): { value: number; str: string } {
  return {
    value: 1,
    str: "yiihhaa",
  };
}
