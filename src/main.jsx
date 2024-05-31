import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Css/QrCode.css";
import { QrCode } from './QrCode';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCode/>
  </React.StrictMode>,
)
