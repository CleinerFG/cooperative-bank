import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import './i18n';
import { ThemeProviderWrapper } from './contexts/ThemeContext';
import GlobalStyle from './components/GlobalStyle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProviderWrapper>
  </StrictMode>
);
