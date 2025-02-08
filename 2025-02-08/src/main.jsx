import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <img src="https://fastly.picsum.photos/id/799/200/300.jpg?hmac=q6DulPHgFwTpoeoXzeVRLJ7-2cd-K69VyeJoIpUM5eg" />
    <h1>This is so cool!</h1>
    <p>I would like to learn more about react</p>
  </div>,
)
