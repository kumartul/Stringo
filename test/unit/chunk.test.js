const chunk = require('../../src/chunk.js');

test('divides the string into chunks', () => {
    expect(chunk("Foobars", 2)).toEqual([['F', 'o'], ['o', 'b'], ['a', 'r'], ['s']]);
});

