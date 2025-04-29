import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Spa from './Spa.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spa />
  </StrictMode>
);
