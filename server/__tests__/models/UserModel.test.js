const { sequelize } = require('../../src/config/databases/mysql/index');
const UserModel = require('../../src/models/UserModel');

describe('UserModel', () => {
  beforeAll(async () => {
    await UserModel.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('should create a user with valid attributes', async () => {
    const user = await UserModel.create({
      fullName: 'John Doe',
      cpf: '12345678901',
      birth: '1990-01-01',
      email: 'john.doe@email.com',
      password: 'hashedpassword',
    });

    expect(user.id).toBeDefined();
    expect(user.opaqueId).toBeDefined();
    expect(user.fullName).toBe('John Doe');
    expect(user.cpf).toBe('12345678901');
    expect(user.birth).toBe('1990-01-01');
    expect(user.email).toBe('john.doe@email.com');
    expect(user.password).toBe('hashedpassword');
    expect(user.operationPassword).toBe(undefined);
    expect(user.balance).toBe(0);
  });

  test('should not allow duplicate CPF', async () => {
    await UserModel.create({
      fullName: 'Jane Doe',
      cpf: '11122233344',
      birth: '1985-05-15',
      email: 'jane.doe@email.com',
      password: 'hashedpassword',
    });

    await expect(
      UserModel.create({
        fullName: 'Another Jane',
        cpf: '11122233344',
        birth: '1992-06-20',
        email: 'another.jane@email.com',
        password: 'hashedpassword',
      })
    ).rejects.toThrow();
  });
});
