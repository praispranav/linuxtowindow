import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter } from "react-router-dom"
import App2 from './App2';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <App2 />
  </React.StrictMode>
  </BrowserRouter>
,
  document.getElementById('root')
);