import('../css/index.css')

import { Layout } from './components/layout/Layout.js';
import { appRouter } from './core/appRouter.js';

new Layout();
appRouter.init();
