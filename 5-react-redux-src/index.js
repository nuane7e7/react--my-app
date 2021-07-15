import React from 'react';
import ReactDOM from 'react-dom';
import App from "./views/App";
import  store  from './redux/store';
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
 <App></App>
 </React.StrictMode>
 </Provider>,
  document.getElementById('root')
)

// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//    <App></App>
//    </React.StrictMode>,
//     document.getElementById('root')
//   )
// })