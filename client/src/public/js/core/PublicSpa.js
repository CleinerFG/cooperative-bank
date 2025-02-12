import { Spa } from '../../../global/js/core/Spa.js';
import publicRouter from './publicRouter.js';

class PublicSpa extends Spa {
  _setup() {
    publicRouter.init();
  }
}

export default new PublicSpa();
