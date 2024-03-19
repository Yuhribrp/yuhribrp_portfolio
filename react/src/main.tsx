import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL || 'https://yuhribrp-portfolio.osc-fr1.scalingo.io';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
