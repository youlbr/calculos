import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './componentes/App.jsx'
import './css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
