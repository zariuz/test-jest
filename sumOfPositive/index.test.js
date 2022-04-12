const positiveSum = require('./index');

describe('Sum Of Positive', () => {
  test('If there is a positive number', () => {
    expect(positiveSum([1, -4, 7, 12])).toBe(20);
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
  });
  test('If an empty array', () => {
    expect(positiveSum([])).toBe(0);
  });
  test('If all negative numbers', () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  });
});
