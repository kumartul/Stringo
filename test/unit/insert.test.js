const insert = require('../../src/insert.js');

test('inserts a string before a substring in the string', () => {
    expect(insert.insertBefore("Fooar", "ar", "b")).toBe("Foobar");
});

test('inserts a string after a substring in the string', () => {
    expect(insert.insertAfter("Sir Eich", "Sir ", "Brendan ")).toBe("Sir Brendan Eich");
});