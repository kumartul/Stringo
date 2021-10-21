const position = require('../../src/position.js');

test('returns the position of the letter in the string', () => {
	expect(position("a")).toBe(1);
});

test('returns the position of the letter in the string', () => {
	expect(position("t")).toBe(20);
});

test('returns the position of the letter in the string', () => {
	expect(position("A")).toBe(1);
});

test('returns the position of the letter in the string', () => {
	expect(position("T")).toBe(20);
});
