import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PaintAPI from './API/PaintAPI.ts'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App api={new PaintAPI(import.meta.env.VITE_API)} />
  </React.StrictMode>,
)
