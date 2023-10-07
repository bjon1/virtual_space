import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './pages/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index={true} element={<App/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)