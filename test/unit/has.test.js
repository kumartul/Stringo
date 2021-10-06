const has = require('../../src/has.js');

test('checks whether a string contains a substring or not', () => {
    expect(has("Foo Bar", "Foo")).toBe(true);
});

test('checks whether a string contains a substring or not', () => {
    expect(has("Foo Bar", "Foobar")).toBe(false);
});