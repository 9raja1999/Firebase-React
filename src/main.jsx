import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeProvider from './configs/ThemeProvider.jsx'
import Navigation from './Navigation/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  </React.StrictMode>,
)
