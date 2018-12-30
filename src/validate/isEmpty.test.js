const isEmpty = require("./isEmpty");

test("Test isEmpty", () => {
  expect(isEmpty("")).toBe(true);
});
