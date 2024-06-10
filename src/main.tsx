import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PaintAPI from './API/PaintAPI.ts'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App api={new PaintAPI("http://127.0.0.1:5000/api/")} />
  </React.StrictMode>,
)
