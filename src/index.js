import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from './Route'
import {AppContextProvider} from './AppContext'

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Route />
    </AppContextProvider>
  </React.StrictMode>
);


