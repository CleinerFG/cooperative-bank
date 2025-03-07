const service = require('../../src/services/accountService');
const repository = require('../../src/repositories/accountRepository');

jest.mock('../../src/repositories/accountRepository');

describe('Account Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getBalance should return the correct balance from the repository', async () => {
    const mockBalance = 4532.45;
    repository.getBalance.mockResolvedValue(mockBalance);

    const balance = await service.getBalance();

    expect(balance).toBe(mockBalance);
    expect(repository.getBalance).toHaveBeenCalledTimes(1);
  });

  test('getDetails should return the correct details from the repository', async () => {
    const mockDetails = {
      name: 'Meg Thomas',
      birth: '2000-05-01T00:00:00.000Z',
      cpf: '71659330009',
      email: 'meg.thomas@gmail.com',
      registration: '2025-01-10T00:00:00.000Z',
    };

    repository.getDetails.mockResolvedValue(mockDetails);

    const details = await service.getDetails();

    expect(details).toEqual(mockDetails);
    expect(repository.getDetails).toHaveBeenCalledTimes(1);
  });
});
