import request from "supertest";
import cheerio from "cheerio";
import app from "../../server/app";

describe("Groceries view", () => {
  let response;
  let $;

  beforeAll(async () => {
    app.get("/mock-groceries-view", (req, res) => {
      res.locals.groceries = ["Milk", "Coffee"];
      res.render("groceries.pug");
    });

    response = await request(app).get("/mock-groceries-view");
    $ = cheerio.load(response.text);
  });

  it("should have expected browser tab title", () => {
    const title = $("title").text();
    expect(title).toBe("Groceries");
  });

  it("should have heading as expected", () => {
    const heading = $("h3").text();
    expect(heading).toBe("Groceries");
  });

  it("should have list as expected", () => {
    const listItem = $("td").length;
    expect(listItem).toBe(4);
  });

  it("should have add grocery heading", () => {
    const addHeading = $("#add-grocery").text().trim();
    expect(addHeading).toEqual("Add Grocery Item");
  });

  it("should have a snapshop of page", () => {
    const page = $.html();
    expect(page).toMatchSnapshot();
  });
});
