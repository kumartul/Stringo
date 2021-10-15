const isLower = require("../../src/isLower.js");

test("checks whether the string is in lowercase or not", () => {
	expect(isLower("foobar")).toBe(true);
});

test("checks whether the string is in lowercase or not", () => {
	expect(isLower("Foobar")).toBe(false);
});
