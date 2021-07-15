import React from 'react';
import ReactDOM from 'react-dom';
import  './App.css';
let time = new Date().toLocaleTimeString()
let str = '当前时间是：'

let man=2
function Element2() {
  return (
    <div>
      <h1>今天是否隔离</h1>
      <h2>{man === 1 ? '隔离' : '躺下'}</h2>
    </div>
  )
}

  

function  run() {
  ReactDOM.render(
    <div>
    <h1 className={"bgRed"}>hellword <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="" /></h1>
    <h2>{str+time}</h2>
   
    <Element2/>
  </div>,
    document.getElementById('root')
  )
}
// run()
setInterval(run, 1000);


// function Clock(props) {
//   return (
//       <div>
//         <h3>现在时间是{props.date.toLocaleTimeString()}</h3>
//         <h4>副标题</h4>
//       </div>
//   )
// }
// function run() {
//     ReactDOM.render(
//       <Clock  date={new Date()} />,
//       document.getElementById('root')
//     )
// }
// setInterval(run, 1000);