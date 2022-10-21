import axios from "axios";

const BACKEND_API_URL = "http://localhost:3000";

export const getAllGroceries = async () => {
  const response = await axios.get(`${BACKEND_API_URL}/groceries`);
  if (response && response.data) {
    return response.data;
  }
  return undefined;
};

export const markItemAsPurchased = async (itemName) => {
  const response = await axios.post(`${BACKEND_API_URL}/grocery/status`, {
    itemName,
  });

  if (response && response.data) {
    return response.data;
  }

  return undefined;
};

export const addToGroceries = async (item) => {
  const response = await axios.post(`${BACKEND_API_URL}/grocery/add`, {
    itemName: item,
  });

  if (response && response.data) {
    return response.data;
  }

  return undefined;
};
