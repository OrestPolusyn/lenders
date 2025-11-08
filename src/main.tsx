import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './assets/styles/global.css'
import './assets/styles/normalize.css'

createRoot(document.getElementById('root')!).render(<App />)
