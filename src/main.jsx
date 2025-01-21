import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FavoritesProvider } from './FavoritesContext.jsx'
import 'normalize.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>,
);