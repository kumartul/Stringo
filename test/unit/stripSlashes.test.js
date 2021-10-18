const stripSlashes = require('../../src/stripSlashes.js');

test('strips slashes from the string', () => {
	expect(stripSlashes("What\\'s\\ Up\\?")).toBe("What's Up?");
});
