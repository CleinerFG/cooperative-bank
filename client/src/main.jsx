import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Spa from './Spa.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spa />
  </StrictMode>
);
