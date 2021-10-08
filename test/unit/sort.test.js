const sort = require("../../src/sort.js");

test("sorts the characters of a string in ascending order", () => {
	expect(sort.sortChars("Foobar", true)).toBe("Faboor");
});

test("sorts the characters of a string in descending order", () => {
	expect(sort.sortChars("Foobar", false)).toBe("roobaF");
});

test("sorts the words of a string in ascending order", () => {
	expect(sort.sortWords("Foo bar", true)).toBe("Foo bar");
});

test("sorts the characters of a string in descending order", () => {
	expect(sort.sortWords("Foo bar", false)).toBe("bar Foo");
});