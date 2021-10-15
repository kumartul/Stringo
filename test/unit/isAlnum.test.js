const isAlnum = require("../../src/isAlnum.js");

test("checks whether the string is alphanumeric or not", () => {
	expect(isAlnum("Foo bar")).toBe(false);
});

test("checks whether the string is alphanumeric or not", () => {
	expect(isAlnum("Foobar")).toBe(true);
});
