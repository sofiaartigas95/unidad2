import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render( //el ! es como decir "se que hay un error pero yo me haré cargo, y borra los errores"
  <StrictMode>
    <App />
  </StrictMode>,
)
