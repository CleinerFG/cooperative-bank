const sequelize = require('../../src/databases');
const UserModel = require('../../src/models/UserModel');
const { createUser } = require('../../src/databases/factories/userFactory');

describe('userFactory', () => {
  beforeAll(async () => {
    await UserModel.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('should create a user with valid attributes', async () => {
    const { model, person } = await createUser();

    expect(model.id).toBeDefined();
    expect(model.opaqueId).toBeDefined();
    expect(model.fullName).toBe(person.fullName);
    expect(model.cpf).toBe(person.cpf);
    expect(model.birth).toBe(person.birth);
    expect(model.email).toBe(person.email);
    expect(model.password).toBe(person.hashPass);
    expect(model.operationPassword).toBe(undefined);
    expect(model.balance).toBe(person.balance);
  });
});
