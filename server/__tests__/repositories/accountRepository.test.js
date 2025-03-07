const accountRepository = require('../../src/repositories/accountRepository');
const db = require('../../config/db');

jest.mock('../../config/db');

describe('Account Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getBalance', async () => {
    const mockDb = { account: { balance: 4532.45 } };
    db.getDb.mockResolvedValue(mockDb);

    const balance = await accountRepository.getBalance();
    expect(balance).toBe(4532.45);
  });

  test('getDetails', async () => {
    const detailsData = {
      name: 'Meg Thomas',
      birth: '2000-05-01T00:00:00.000Z',
      cpf: '71659330009',
      email: 'meg.thomas@gmail.com',
      registration: '2025-01-10T00:00:00.000Z',
    };

    const mockDb = {
      account: { details: detailsData },
    };

    db.getDb.mockResolvedValue(mockDb);

    const details = await accountRepository.getDetails();
    expect(details).toEqual(detailsData);
  });
});
