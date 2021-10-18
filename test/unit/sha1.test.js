const sha1 = require('../../src/sha1.js');
const sha_1 = require('sha1');

test('hashes a string using sha1 algorithm', () => {
	expect(sha1("Foobar")).toBe(sha_1("Foobar"));
});
