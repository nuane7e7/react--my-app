import React from "react";
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types';
import './index.css';

export default class Header extends React.Component {
  static  propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  handKeyUp  = (event) => {
    let {target,keyCode} =event
    if(keyCode === 13 ) {
      if(target.value.trim() !== '') {
        this.props.addTodo({id:nanoid(),name:target.value,done:false})
        console.log(target.value)
        target.value = ""
      }else{
        alert('请输入要完成的事件')
      return
      }
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={(e)=> this.handKeyUp(e)} placeholder="请输入你的认为名称，按回车键确认"></input>
      </div>
    )
  }
 
}