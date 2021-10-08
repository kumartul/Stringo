const breakStr = require("../../src/breakStr.js");

test("breaks the string", () => {
	expect(breakStr("Foo bar", "bar")).toEqual(["Foo ", "bar"]);
});

