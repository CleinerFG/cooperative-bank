// const userRepository = require('../../src/repositories/UserRepository');
// const UserModel = require('../../src/models/UserModel');

// jest.mock('../../src/models/UserModel');

// describe('UserRepository', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('findByCpf', () => {
//     it('should return user data when CPF is found', async () => {
//       const mockData = { fullName: 'Meg Thomas', cpf: '12345678900' };
//       const mockUser = {
//         ...mockData,
//         toJSON: () => mockData,
//       };

//       UserModel.findOne.mockResolvedValue(mockUser);
//       const result = await userRepository.findByCpf('12345678900');

//       expect(result).toEqual(mockData);
//     });

//     it('should return null when CPF is not found', async () => {
//       UserModel.findOne.mockResolvedValue(null);
//       const result = await userRepository.findByCpf('99999999999');
//       expect(result).toBeNull();
//     });
//   });

//   describe('findBalanceById', () => {
//     it('should return user balance when ID is found', async () => {
//       const mockUser = {
//         balance: 100.5,
//       };

//       UserModel.findByPk.mockResolvedValue(mockUser);
//       const result = await userRepository.findBalanceById(1);

//       expect(result).toBe(100.5);
//     });

//     it('should return null when ID is not found', async () => {
//       UserModel.findByPk.mockResolvedValue(null);
//       const result = await userRepository.findBalanceById(999);

//       expect(result).toBeNull();
//     });
//   });

//   describe('findDetailsById', () => {
//     it('should return user details when ID is found', async () => {
//       const mockData = {
//         fullName: 'Meg Thomas',
//         birth: new Date('1990-01-01'),
//         cpf: '00987654321',
//         email: 'meg.thomas@example.com',
//         created_at: new Date('2023-01-01'),
//       };
//       const mockUser = {
//         ...mockData,
//         toJSON: () => ({
//           fullName: 'Meg Thomas',
//           birth: new Date('1990-01-01'),
//           cpf: '00987654321',
//           email: 'meg.thomas@example.com',
//           registration: new Date('2023-01-01'),
//         }),
//       };

//       UserModel.findByPk.mockResolvedValue(mockUser);
//       const result = await userRepository.findDetailsById(2);

//       expect(result).toEqual({
//         fullName: 'Meg Thomas',
//         birth: new Date('1990-01-01'),
//         cpf: '00987654321',
//         email: 'meg.thomas@example.com',
//         registration: new Date('2023-01-01'),
//       });
//     });

//     it('should return null when ID is not found', async () => {
//       UserModel.findByPk.mockResolvedValue(null);
//       const result = await userRepository.findDetailsById(999);

//       expect(result).toBeNull();
//     });
//   });
// });
