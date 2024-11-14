import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "aos/dist/aos.css";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <App />
)
