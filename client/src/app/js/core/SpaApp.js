import Spa from '../../../global/js/core/Spa.js';
import appRouter from './appRouter.js';
import layout from './Layout.js';
import notificationManager from './NotificationManager.js';

class SpaApp extends Spa {
  _setup() {
    appRouter.init();
    layout.init();
    notificationManager.init();
  }
}

export default new SpaApp();
