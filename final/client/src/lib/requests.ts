export interface FruitResponse {
  fruits: { description: string; data: string[] };
}

export async function getFoods(url: string): Promise<FruitResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch food");
  }
  const json = (await response.json()) as FruitResponse;
  return json;
}

export async function postFood(url: string, food: string): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ food }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch food");
  }
  const json = await response.json();
  // console.log(json);
  return json;
}
