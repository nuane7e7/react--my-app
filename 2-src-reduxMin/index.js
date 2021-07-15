import React from 'react';
import ReactDOM from 'react-dom';
import App from "./views/App";
import  store  from './redux/store';
ReactDOM.render(
  <React.StrictMode>
 <App></App>
 </React.StrictMode>,
  document.getElementById('root')
)

store.subscribe(()=>{
  ReactDOM.render(
    <React.StrictMode>
   <App></App>
   </React.StrictMode>,
    document.getElementById('root')
  )
})