import ApiService from '../../../global/js/core/ApiService.js';

class AuthService extends ApiService {
  async login(data) {
    return await super.post('/auth/login', data);
  }

  async register(data) {
    return await super.post('/users', data);
  }
}

const authService = new AuthService();

export default authService;
