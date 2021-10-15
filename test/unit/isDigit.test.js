const isDigit = require("../../src/isDigit.js");

test("checks whether all the characters of a string are digits or not", () => {
	expect(isDigit("8234089")).toBe(true);
});

test("checks whether all the characters of a string are digits or not", () => {
	expect(isDigit("foo8234wow089bar")).toBe(false);
});
