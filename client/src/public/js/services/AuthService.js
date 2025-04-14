import ApiService from '../../../global/js/core/ApiService.js';
class AuthService extends ApiService {
  async login(data) {
    const res = await super.post('/auth/login', data);
    if (res.status === 200) window.location.href = '/app';
    return res;
  }

  async register(data) {
    return await super.post('/users', data);
  }
}

const authService = new AuthService();

export default authService;
