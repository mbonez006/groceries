import { groceriesHandler, groceriesPostHandler } from "../groceries";
import * as groceriesServices from "../../services/groceriesServices";

jest.mock("../../services/groceriesServices");

describe("groceriesHandler", () => {
  it("should be able to render groceries view", async () => {
    const mockReq = {};
    const mockRes = {
      render: jest.fn(),
      locals: {},
    };

    await groceriesHandler(mockReq, mockRes);

    expect(mockRes.render).toBeCalledWith("groceries.pug");
  });

  it("should be able to get groceries list and set in locals", async () => {
    const expectedGroceries = [
      { name: "Milk", status: "purchased" },
      { item: "Tea", status: "Not purchased" },
    ];
    groceriesServices.getAllGroceries.mockReturnValue(expectedGroceries);

    const mockReq = {};
    const mockRes = {
      render: jest.fn(),
      locals: {},
    };

    await groceriesHandler(mockReq, mockRes);

    expect(mockRes.locals.groceries).toBe(expectedGroceries);
  });
});

describe("POST groceriesHandler", () => {
  afterAll(() => {
    groceriesServices.markItemAsPurchased.mockReset();
    groceriesServices.addToGroceries.mockReset();
  });

  it("should be able to update an item as purchased", async () => {
    const mockReq = {
      body: {
        markAsPurchased: "Tea",
      },
    };
    const mockRes = {
      render: jest.fn(),
      locals: {},
    };
    const mockNext = jest.fn();

    await groceriesPostHandler(mockReq, mockRes, mockNext);

    expect(groceriesServices.markItemAsPurchased).toBeCalledWith("Tea");
    expect(groceriesServices.addToGroceries).not.toBeCalled();
    expect(mockNext).toBeCalled();
  });
});

describe("POST addGroceriesHandler", () => {
  it("should be able to call addGrocery api", async () => {
    const mockReq = {
      body: {
        itemToAdd: "Gum",
      },
    };
    const mockRes = {
      render: jest.fn(),
      locals: {},
    };
    const mockNext = jest.fn();

    await groceriesPostHandler(mockReq, mockRes, mockNext);

    expect(groceriesServices.addToGroceries).toBeCalledWith("Gum");
    expect(groceriesServices.markItemAsPurchased).not.toBeCalled();
    expect(mockNext).toBeCalled();
  });
});
