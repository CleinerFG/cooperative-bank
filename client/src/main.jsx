import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './router';
import './i18n';
import { ThemeProviderWrapper } from './contexts/ThemeContext';
import GlobalStyle from './components/GlobalStyle';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  </StrictMode>
);
