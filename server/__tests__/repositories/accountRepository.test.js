const repository = require('../../src/repositories/accountRepository');
const db = require('../../config/db');

jest.mock('../../config/db');

describe('Account Repository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getBalance should return the correct balance', async () => {
    const mockBalance = { account: { balance: 4532.45 } };
    db.getDb.mockResolvedValue(mockBalance);

    const balance = await repository.getBalance();

    expect(balance).toBe(4532.45);
    expect(db.getDb).toHaveBeenCalledTimes(1);
  });

  test('getDetails should return the correct account details', async () => {
    const detailsData = {
      name: 'Meg Thomas',
      birth: '2000-05-01T00:00:00.000Z',
      cpf: '71659330009',
      email: 'meg.thomas@gmail.com',
      registration: '2025-01-10T00:00:00.000Z',
    };

    const mockDetails = {
      account: { details: detailsData },
    };

    db.getDb.mockResolvedValue(mockDetails);

    const details = await repository.getDetails();

    expect(details).toEqual(detailsData);
    expect(db.getDb).toHaveBeenCalledTimes(1);
  });
});
