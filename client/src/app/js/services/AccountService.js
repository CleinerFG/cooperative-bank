import ApiService from '../../../global/js/services/ApiService.js';

class AccountService extends ApiService {
  async getDetails() {
    return (await super.get('/account/details')).json();
  }

  async getBalance() {
    return (await super.get('/account/balance')).json();
  }

  async getProfileImgUrl() {
    const res = await super.get('/account/profile-img');
    if (res.status === 200) {
      const blob = await res.blob();
      return URL.createObjectURL(blob);
    }
    return '';
  }
}

export default new AccountService();
