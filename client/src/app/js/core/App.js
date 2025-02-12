import appRouter from './appRouter.js';
import layout from '../components/common/Layout.js';
import notificationManager from '../components/common/NotificationManager.js';

class App {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      appRouter.init();
      layout.init();
      notificationManager.init();
    });
  }
}

export default new App();
