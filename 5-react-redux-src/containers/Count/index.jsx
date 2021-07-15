
import React, { Component } from 'react'
import { connect } from "react-redux";
import { createIncrement, createDecrement, AsyncIncrement } from "../../redux/actions/Count";

/**使用connect()()创建并暴露一个Count的容器组件 */


class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.createIncrement(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.createDecrement(value * 1)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.data % 2 !== 0) {
      this.props.createIncrement(value * 1)
    }
  }
  decrementAsync = () => {
    const { value } = this.selectNumber
    this.props.AsyncIncrement(value * 1, 1000)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Count组件</h2>
        <h3>当前求和值为：{this.props.data} --------下面组件的人数是{this.props.personNums}</h3>
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


/**映射数据 */
// const mapStateToProps =state =>  ({data:state});

/**映射操作数据方法 */
// const mapDisoatchToProps =dispatch=> ({createIncrement:num=>dispatch(createIncrement(num)),createDecrement:num=>dispatch(createDecrement(num)),AsyncIncrement:num=>dispatch(AsyncIncrement(num))});
export default connect(
  // mapStateToProps
  /**简写 */
  state => ({ data: state.Count,personNums:state.Person.length })
  ,
  // mapDisoatchToProps
  /**简写 自动dispatch分发 */
  { createIncrement, createDecrement, AsyncIncrement }
)(Count)
