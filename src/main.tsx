import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx';
import './index.css' // Hamari styling file jo hum agle step mein banayenge

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
