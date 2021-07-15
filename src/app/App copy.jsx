import React from 'react';
import { createStore } from "redux";

const reducer = (state={num:0},action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
      case "add":
          state.num++;
        break;
      case "decrement":
          state.num--;
        break;
    
    }
  return {...state}
}

const store = createStore(reducer)
console.log(store)
function add() {
    //通过仓库的方法进行dispath修改数据
    store.dispatch({type:"add"})
}
function decrement() {
  //通过仓库的方法进行dispath修改数据
  store.dispatch({type:"decrement"})
}
const Counter = () =>{
  return (
    <div>
      <h3>计数数量：{store.getState()}</h3>
      <button onClick={add}>计数+1</button>
      <button onClick={decrement}>计数-2</button>
    </div>
  )
}
class App extends React.Component {
  render() {
    return (
   <div>
     <Counter/>
   </div>
    )
  }
}
export default  App