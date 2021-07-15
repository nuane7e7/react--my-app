import React, { Component } from 'react'

export default class Count extends Component {
  state ={
    count:0
  }
  addCount =()=>{
    this.setState(state=>({count:state.count+1}),()=>console.log(this.state.count))
  }
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}
