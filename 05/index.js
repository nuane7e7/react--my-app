import React from 'react';
import ReactDOM from 'react-dom';
import App from "./views/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
 <App></App>
 </React.StrictMode>
 </BrowserRouter>,
  document.getElementById('root')
)
