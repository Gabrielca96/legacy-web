import React from 'react';
import ReactDOM from 'react-dom/client';

//import { I18nextProvider } from 'react-i18next';
//NO BORRAR!
import i18n from './i18n'; // Tu archivo de configuración de i18n
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


