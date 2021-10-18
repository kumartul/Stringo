const filter = require('../../src/filter.js');

test('filters vowels from the string', () => {
	expect(filter("Foobar", "vowel")).toBe("ooa");
});

test('filters consonants from the string', () => {
	expect(filter("Foobar", "consonant")).toBe("Fbr");
});

test('filters consonants from the string', () => {
	expect(filter("Foo bar", "whitespace")).toBe(" ");
});
