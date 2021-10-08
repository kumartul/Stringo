const removeWhitespace = require("../../src/removeWhitespace.js");

test("removes all the whitespace from the string", () => {
	expect(removeWhitespace("Foo Bar      is    the bar for           Programmers          ")).toBe("FooBaristhebarforProgrammers");
});

test("removes all the extra whitespace from the string", () => {
	expect(removeWhitespace("Foo Bar      is    the bar for           Programmers          ", true)).toBe("Foo Bar is the bar for Programmers");
});