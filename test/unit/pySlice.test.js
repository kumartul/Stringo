const pySlice = require('../../src/pySlice.js');

test('returns the character at the specified index of the string', () => {
	expect(pySlice("Foobar", "3")).toBe("b");
});

test('returns the character at the specified index of the string', () => {
	expect(pySlice("Foobar", "3")).toBe("b");
});

test('slices the string from the specified index to the specified index', () => {
	expect(pySlice("Foobar", "3:5:")).toBe("bar");
});

test('slices the string from the specified index to the specified index', () => {
	expect(pySlice("Foobar", "-5:-3:")).toBe("oo");
});

test('returns an empty string as the step is 0', () => {
	expect(pySlice("Foobar", "-5:-3:0")).toBe("");
});

test('reverses the string', () => {
	expect(pySlice("Foobar", "::-1")).toBe("rabooF");
});

test('returns the whole string', () => {
	expect(pySlice("Foobar", "::")).toBe("Foobar");
});

test('returns the whole string', () => {
	expect(pySlice("Foobar", "::1")).toBe("Foobar");
});

test('returs the characters in the strings at the index divisible by the specified index', () => {
	expect(pySlice("Foobar", "0:4:2")).toBe("Foa");
});

test('returs the characters in the strings at the index divisible by the specified index', () => {
	expect(pySlice("Foobar", "-4:-1:2")).toBe("oa");
});

test('returs the characters in the strings at the index divisible by the specified index', () => {
	expect(pySlice("Foobar", "0:4:-2")).toBe("rbo");
});
