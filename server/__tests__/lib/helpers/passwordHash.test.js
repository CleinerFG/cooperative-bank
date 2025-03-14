const {
  createPasswordHash,
  comparePassword,
} = require('../../../src/lib/helpers/paswordHash');

describe('Helpers - Password hash', () => {
  test('createPasswordHash should return a hash string', async () => {
    const hash = await createPasswordHash('myPassword123');
    expect(typeof hash).toBe('string');
    expect(hash.length).toBeGreaterThan(0);
  });

  test('comparePassword should return true for matching passwords', async () => {
    const password = 'myPassword123';
    const hash = await createPasswordHash(password);
    const result = await comparePassword(password, hash);
    expect(result).toBe(true);
  });

  test('comparePassword should return false for non-matching passwords', async () => {
    const password = 'myPassword123';
    const hash = await createPasswordHash(password);
    const result = await comparePassword('wrongPassword', hash);
    expect(result).toBe(false);
  });
});
