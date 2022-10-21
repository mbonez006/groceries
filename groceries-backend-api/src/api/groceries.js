let groceries = [
  { name: "Milk", purchased: false },
  { name: "Tea", purchased: false },
  { name: "Bread", purchased: false },
];

export const getAllGroceries = (req, res) => {
  res.status(200);
  res.json(groceries);
};

export const markItemAsPurchased = (req, res) => {
  const { itemName } = req.body;
  groceries = groceries.map((item) => {
    if (item.name === itemName) {
      return { name: itemName, purchased: true };
    }
    return item;
  });

  res.status(200);
  res.json(groceries);
};

export const addItem = (req, res) => {
  const { itemName } = req.body;
  groceries.push({
    name: itemName,
    purchased: false,
  });

  res.status(200);
  res.json(groceries);
};
