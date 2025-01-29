
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

// Create the root element and render the app
const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>

    </BrowserRouter>
  </StrictMode>
);
