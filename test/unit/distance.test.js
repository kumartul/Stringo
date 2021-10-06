const distance = require('../../src/distance.js');

test('returns the distance between two substrings in the string', () => {
    expect(distance("Foo Bar", "Foo", "Bar")).toBe(4);
});