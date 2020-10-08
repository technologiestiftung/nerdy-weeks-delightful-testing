export function add(a: number, b: number): number {
  return a + b;
}
export function subtract(a: number, b: number): number {
  return a - b;
}

export function select<T>(i: number, items: T[]): T | undefined {
  return items[i];
}

export function randomString(len: number): string {
  const source =
    '0987654321ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ!"§$%&/()=?';

  let res = "";
  for (let i = 0; i < len; i++) {
    res += source.charAt(Math.floor(Math.random() * source.length));
  }
  return res;
}

export function randomValues(): { value: number; str: string } {
  return {
    value: Math.random() * 1000,
    str: randomString(Math.floor(Math.random() * 100)),
  };
}

export function somethingShouldBeStatic(): { value: number; str: string } {
  return {
    value: 1,
    str: "yiihhaa",
  };
}
