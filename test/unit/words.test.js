const words = require('../../src/words.js');

test('returns the words in a string', () => {
    expect(words("Foo Bar")).toEqual(["Foo", "Bar"]);
});