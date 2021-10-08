const nth = require("../../src/nth.js");

test("returns the character at the nth position of the string", () => {
	expect(nth("Foobar", 3)).toBe("b");
});

test("returns the character at the nth position of the string", () => {
	expect(nth("Foobar", -2)).toBe("a");
});