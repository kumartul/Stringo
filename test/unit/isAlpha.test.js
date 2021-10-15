const isAlpha = require("../../src/isAlpha.js");

test("checks whether the string is composed of alphabets only or not", () => {
	expect(isAlpha("Foobar")).toBe(true);
});

test("checks whether the string is composed of alphabets only or not", () => {
	expect(isAlpha("Foobar0")).toBe(false);
});
