const clear = require("../../src/clear.js");

test('empties the string', () => {
    expect(clear("Foo")).toBe("");
});