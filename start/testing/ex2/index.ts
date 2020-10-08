/**
 * Write a function that adds to numbers together
 */
export function add(a: number, b: number): number {}
/**
 * Write a function that subtracts one number from the other
 */
export function subtract(a: number, b: number): number {}
/**
 * Write a function that selects something from an array of generics
 * if the item does not exsist return undefined
 */
export function select<T>(i: number, items: T[]): T | undefined {}

/**
 * Write a function that returns a string of a specific length
 */
export function randomString(len: number): string {}

/**
 * Wirte a function that returns an object with a random number and a random string
 */
export function randomValues(): { value: number; str: string } {}

/**
 * Write a function that returns always the same object
 */

export function somethingShouldBeStatic(): { value: number; str: string } {}
