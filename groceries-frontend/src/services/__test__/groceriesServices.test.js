import {
  getAllGroceries,
  markItemAsPurchased,
  addToGroceries,
} from "../groceriesServices";
import axios from "axios";

jest.mock("axios");

const BASE_URL = "http://localhost:3000";

describe("Groceries Services - getAllGroceries", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  it("should be able to return all groceries following calling /groceries API", async () => {
    const expectedResponse = {
      data: [
        { name: "Milk", purchased: true },
        { name: "Tea", purchased: false },
      ],
    };
    axios.get.mockReturnValue(Promise.resolve(expectedResponse));

    const result = await getAllGroceries();
    expect(result).toBe(expectedResponse.data);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/groceries`);
  });

  it("should return undefined if api call fails", async () => {
    axios.get.mockReturnValue(Promise.resolve({}));
    const result = await getAllGroceries();

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/groceries`);
    expect(result).toBeUndefined();
  });
});

describe("Groceries Services - markItemAsPurchased", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  it("should be able to indicate an item is marked as purchased following calling /grocery/status API", async () => {
    const expectedResponse = {
      data: [
        { name: "ItemA", purchased: true },
        { name: "ItemB", purchased: false },
      ],
    };
    axios.post.mockReturnValue(Promise.resolve(expectedResponse));

    const itemName = "ItemA";
    const result = await markItemAsPurchased(itemName);

    expect(result).toBe(expectedResponse.data);
    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/grocery/status`, {
      itemName,
    });
  });

  it("should return undefined if api call fails", async () => {
    axios.post.mockReturnValue(Promise.resolve({}));
    const itemName = "ItemA";
    const result = await markItemAsPurchased(itemName);

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/grocery/status`, {
      itemName,
    });
    expect(result).toBeUndefined();
  });
});

describe("Groceries Services - addToGroceries", () => {
  beforeEach(() => {
    axios.mockReset();
  });

  it("should be able to add item to groceries following calling /grocery/add API", async () => {
    const expectedResponse = {
      data: [
        { name: "ItemA", purchased: true },
        { name: "ItemB", purchased: false },
      ],
    };
    axios.post.mockReturnValue(Promise.resolve(expectedResponse));

    const itemName = "ItemA";
    const result = await addToGroceries(itemName);

    expect(result).toBe(expectedResponse.data);
    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/grocery/add`, {
      itemName,
    });
  });

  it("should return undefined if api call fails", async () => {
    axios.post.mockReturnValue(Promise.resolve({}));
    const itemName = "ItemA";
    const result = await addToGroceries(itemName);

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/grocery/add`, {
      itemName,
    });
    expect(result).toBeUndefined();
  });
});
