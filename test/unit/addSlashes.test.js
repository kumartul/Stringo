const addSlashes = require('../../src/addSlashes.js');

test('adds slashes before special characters in the string', () => {
	expect(addSlashes("What's up?")).toBe("What\\'s\\ up\\?");
});
