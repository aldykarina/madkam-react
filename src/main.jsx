import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
