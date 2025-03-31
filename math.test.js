const { add, subtract, reverseString } = require('./math');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

// TODO: Write a test for subtract()
// TODO: Write a test for reverseString()