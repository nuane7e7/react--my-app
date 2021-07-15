import React from "react";
import PropTypes from 'prop-types';
import Itme from '../item';
import './index.css'


export default class List extends  React.Component {
  static propTypes = {
    deleteTodo:PropTypes.func.isRequired,
    setDataState:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
  }
  render() {
     let {todos,deleteTodo,setDataState} =this.props
    return (
      <ul className="todo-main">
        {
        todos.map(item => {
           return <Itme {...item} key={item.id} deleteTodo={deleteTodo} setDataState ={setDataState}></Itme>
        })
        }
      </ul>
    )
  }
}