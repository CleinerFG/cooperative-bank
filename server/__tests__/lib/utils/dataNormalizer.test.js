const {
  removeBlankSpace,
  removeCpfFormatting,
  titleCase,
} = require('../../../src/lib/utils/dataNormalizer');

describe('Utils - dataNormalizer', () => {
  test('removeBlankSpace', () => {
    expect(removeBlankSpace(' my  sentence with   blank   space   ')).toBe(
      'my sentence with blank space'
    );
    expect(removeBlankSpace('sentence   extra   blank space')).toBe(
      'sentence extra blank space'
    );
  });

  test('removeCpfFormatting', () => {
    expect(removeCpfFormatting('123.456.789-00')).toBe('12345678900');
  });

  test('titleCase', () => {
    expect(titleCase('jhon doe vont')).toBe('Jhon Doe Vont');
  });
});
