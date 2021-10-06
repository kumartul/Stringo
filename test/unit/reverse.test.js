const reverse = require('../../src/reverse.js');

test('reverses the string', () => {
    expect(reverse("Foobar")).toBe("rabooF");
});

