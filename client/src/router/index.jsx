import { createBrowserRouter } from 'react-router-dom';

import appRoutes from './appRoutes';
import publicRoutes from './publicRoutes';

const router = createBrowserRouter([appRoutes, publicRoutes]);

export default router;
