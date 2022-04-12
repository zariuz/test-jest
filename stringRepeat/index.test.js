const repeatStr = require('./index');

describe('String Repeat', () => {
  test('Multiply the string', () => {
    expect(repeatStr(3, '*')).toBe('***');
    expect(repeatStr(7, '#')).toBe('#######');
    expect(repeatStr(2, 'hello')).toBe('hellohello');
  });
});
