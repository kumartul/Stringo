const md5 = require('../../src/md5.js');
const md_5 = require('blueimp-md5');

test('hashes a string using md5 algorithm', () => {
	expect(md5("Foobar")).toBe(md_5("Foobar"));
});
