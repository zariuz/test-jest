const removeChar = require('./index');

describe('Remove First and Last Character', () => {
  test('String validation', () => {
    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('Hello')).toBe('ell');
    expect(removeChar('person')).toBe('erso');
  });
  test('if the string is empty', () => {
    expect(removeChar('')).toBe('');
  });
});
