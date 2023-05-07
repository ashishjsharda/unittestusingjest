const { addNumbers } = require('../src/api');

describe('addNumbers', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(addNumbers(1, 2)).toBe(3);
    });

    test('adds -1 + 1 to equal 0', () => {
        expect(addNumbers(-1, 1)).toBe(0);
    });
});
