// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Bu değişiklik önemli
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// React 18 ile createRoot kullanılacak
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
