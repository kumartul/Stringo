const changeCase = require("../../src/changeCase.js");

test("converts the string to lowercase", () => {
	expect(changeCase("Atul", "lower")).toBe("atul");
});

test("converts the string to uppercase", () => {
	expect(changeCase("Atul", "upper")).toBe("ATUL");
});

test("converts the string to sentence case", () => {
	expect(changeCase("atUL", "sentence")).toBe("Atul");
});

