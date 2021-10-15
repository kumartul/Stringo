const isSentence = require("../../src/isSentence.js");

test("checks if the string is in sentence case or not", () => {
	expect(isSentence("Foobar")).toBe(true);
});

test("checks if the string is in sentence case or not", () => {
	expect(isSentence("foobar")).toBe(false);
});
