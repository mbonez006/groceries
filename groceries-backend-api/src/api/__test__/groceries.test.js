import { getAllGroceries, markItemAsPurchased, addItem } from "../groceries";

describe("groceries", () => {
  it("should be able to return all groceries", () => {
    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const expectedGroceries = [
      { name: "Milk", purchased: false },
      { name: "Tea", purchased: false },
      { name: "Bread", purchased: false },
    ];

    getAllGroceries(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedGroceries);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });

  it("should be able to update grocery purchase status", () => {
    const mockReq = {
      body: {
        itemName: "Milk",
      },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const expectedGroceries = [
      { name: "Milk", purchased: true },
      { name: "Tea", purchased: false },
      { name: "Bread", purchased: false },
    ];

    markItemAsPurchased(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedGroceries);
    expect(mockRes.status).toHaveBeenCalledWith(200);

    getAllGroceries(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedGroceries);
  });

  it("should be able to add item to grocery", () => {
    const mockReq = {
      body: {
        itemName: "Honey",
      },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const expectedGroceries = [
      { name: "Milk", purchased: true },
      { name: "Tea", purchased: false },
      { name: "Bread", purchased: false },
      { name: "Honey", purchased: false },
    ];

    addItem(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedGroceries);
    expect(mockRes.status).toHaveBeenCalledWith(200);

    getAllGroceries(mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith(expectedGroceries);
  });
});
