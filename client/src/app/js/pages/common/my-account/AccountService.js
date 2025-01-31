import { ApiService } from '../../../../../global/js/service/ApiService.js';

export class AccountService {
  get #endpoint() {
    return 'account/info';
  }
  async fetch() {
    return await ApiService.fetchFrom(this.#endpoint);
  }
}
