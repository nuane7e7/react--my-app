import React, { Component } from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Footer from '../../components/footer'
import './index.css'
export default class App extends Component {
  state = {
    todos: [
      { id: "1", name: "吃饭", done: true },
      { id: "2", name: "睡觉", done: true },
      { id: "3", name: "打豆豆", done: true },
    ]
  }
  /**获取总数选中数 */
  getNum = () => {
    let { todos } = this.state
    let all = todos.length
    let finish = todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0)
    return { all, finish }
  }
  /**修改状态*/
  setDataState = (obj) => {
    let { todos } = this.state
    let newData = todos.map(item => {
      if (item.id === obj.id) return { ...item, done: obj.done };
      return item
    })
    this.setState({ todos: newData })
  }
  /**全选/全不选 */
  checkAllTodo = (flag) => {
    let { todos } = this.state
    let newData = todos.map(item => { return { ...item, done: flag } })
    this.setState({ todos: newData })
  }
  /**添加 */
  addTodo = (obj) => {
    let { todos } = this.state
    let newData = [obj, ...todos]
    this.setState({ todos: newData })
  }
  /** 选中删除*/
  deleteTodos = () => {
    let { todos } = this.state
    let newData = todos.filter(item => !item.done)
    this.setState({ todos: newData })
  }
  /**删除单个 */
  deleteTodo = (id) => {
    if(window.confirm(`确定删除吗？`)){
      let { todos } = this.state
      let newData = todos.filter(item => !(item.id === id))
      this.setState({ todos: newData })
    }
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} deleteTodo={this.deleteTodo} setDataState={this.setDataState} />
          <Footer {...this.getNum()} checkAllTodo={this.checkAllTodo} deleteTodo={this.deleteTodos} />
        </div>
      </div>
    )
  }
}
