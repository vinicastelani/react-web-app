import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home/App'
import './index.css'
import './grid.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
