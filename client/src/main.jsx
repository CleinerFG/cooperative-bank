import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import './i18n';
import './styles/global.scss';
import { ThemeProviderWrapper } from './contexts/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProviderWrapper>
  </StrictMode>
);
