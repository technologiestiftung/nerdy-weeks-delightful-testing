import { getFoods, postFood } from "./requests";
import { fruits } from "../mocks/fruits";
describe("requests with mocking fetch", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  it("should make a GET request to a mocked API", async () => {
    const spyFetch = jest.spyOn(global, "fetch");
    const response = await getFoods("/api/foods");
    expect(spyFetch).toHaveBeenCalled();
    expect(spyFetch).toHaveBeenCalledWith("/api/foods");
    expect(response).toBeDefined();
    expect(response.fruits.data).toHaveLength(fruits.data.length);
  });
  it("should make a POST request to a mocked API", async () => {
    const spyFetch = jest.spyOn(global, "fetch");
    const response = await postFood("/api/foods", "dog food");
    expect(spyFetch).toHaveBeenCalled();
    const body = JSON.stringify({ food: "dog food" });
    const headers = { "Content-Type": "application/json" };
    expect(spyFetch).toHaveBeenCalledWith("/api/foods", {
      body,
      headers,
      method: "POST",
    });

    expect(response).toBeDefined();
    expect(response).toMatchInlineSnapshot(`
      Object {
        "message": "food added",
      }
    `);
  });

  it("should throw an error if response of GET is not okay", async () => {
    const spyFetch = jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce({ ok: false } as Response);
    await expect(getFoods("/foo")).rejects.toThrow();
    expect(spyFetch).toHaveBeenCalledTimes(1);
  });
  it("should throw an error if response of POST is not okay", async () => {
    const spyFetch = jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce({ ok: false } as Response);
    await expect(postFood("/foo", "dog food")).rejects.toThrow();
    expect(spyFetch).toHaveBeenCalledTimes(1);
  });
});
