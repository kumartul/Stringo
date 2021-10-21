const value = require('../../src/value.js');

test('returns the sum of the position of all the alphabets in the string', () => {
	expect(value("Foobar")).toBe(57);
});

test('returns the sum of the position of all the alphabets in the string', () => {
	expect(value("F1o2o3b4a5r")).toBe(57);
});

test('returns the sum of the position of all the alphabets in the string', () => {
	expect(value("foobar@gmail.com")).toBe(130);
});
