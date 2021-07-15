import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from "./views/App";
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
 <App></App>
 </React.StrictMode>
 </BrowserRouter>,
  document.getElementById('root')
)
