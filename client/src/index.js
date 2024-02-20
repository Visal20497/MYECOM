import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'
import CategoryContext from './context/CategoryContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <CategoryContext>
          <App />
        </CategoryContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
