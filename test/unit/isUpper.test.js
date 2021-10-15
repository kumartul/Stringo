const isUpper = require('../../src/isUpper.js');

test('checks if the string is in uppercase or not', () => {
	expect(isUpper("FOOBAR")).toBe(true);
});

test('checks if the string is in uppercase or not', () => {
	expect(isUpper("FOoBAR")).toBe(false);
});
