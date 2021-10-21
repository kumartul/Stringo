const opposite = require('../../src/opposite.js');

test('replaces all the letters in a string with its opposite letters', () => {
	expect(opposite("Foobar")).toBe("Ullyzi");
});

test('replaces all the letters in a string with its opposite letters', () => {
	expect(opposite("F1o2o3b4a5r")).toBe("U1l2l3y4z5i");
});

test('replaces all the letters in a string with its opposite letters', () => {
	expect(opposite("Foobar 123 @ gmail . com")).toBe("Ullyzi 123 @ tnzro . xln");
});
