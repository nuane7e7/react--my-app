import React, { Component } from 'react'
import store from "../../redux/store";

export default class Count extends Component {
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  increment = () => {
      const {value} = this.selectNumber
      store.dispatch({type:"increment", data:value*1})
  }
  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch({type:"decrement", data:value*1})
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(store.getState()%2 !==0) return   store.dispatch({type:"increment", data:value*1})
  }
  decrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type:"increment", data:value*1})
    }, 1000); 
  }
  render() {
    console.log(store)
    return (
      <div>
        <h1>当前求和值为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
          &nbsp;<button onClick={this.increment}>+</button>
          &nbsp;<button onClick={this.decrement}>-</button>
          &nbsp;<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
          &nbsp;<button onClick={this.decrementAsync}>异步加</button>
      </div>
    )
  }
}
