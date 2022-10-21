import {
  getAllGroceries,
  markItemAsPurchased,
  addToGroceries,
} from "../services/groceriesServices";

export const groceriesHandler = async (req, res) => {
  res.locals.groceries = await getAllGroceries();
  res.render("groceries.pug");
};

export const groceriesPostHandler = async (req, res, next) => {
  const { markAsPurchased, itemToAdd } = req.body;
  if (markAsPurchased) {
    await markItemAsPurchased(markAsPurchased);
  } else if (itemToAdd) {
    await addToGroceries(itemToAdd);
  }
  next();
};
