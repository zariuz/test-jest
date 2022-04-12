const opposite = require('./index');

describe('Opposite Number', () => {
  test('if the number is positive', () => {
    expect(opposite(1)).toBe(-1);
    expect(opposite(15)).toBe(-15);
  });
  test('if the number is negative', () => {
    expect(opposite(-1)).toBe(1);
    expect(opposite(-100500)).toBe(100500);
  });
});
