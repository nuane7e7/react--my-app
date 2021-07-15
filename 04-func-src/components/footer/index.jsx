import React from "react";
import PropTypes from "prop-types";
import './index.css';
export default class Footer extends  React.Component {
  static propTypes = {
    all:PropTypes.number.isRequired,
    finish:PropTypes.number.isRequired,
    checkAllTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }
  render() {
    let {all ,finish,checkAllTodo,deleteTodo} = this.props
    return (
      <div className="todo-footer">
        <label >
          <input type="checkbox" checked= { finish === all && all !==0 } onChange={ () => checkAllTodo(!(finish === all && all !==0))}/>
        </label>
        <span>
        <span>已完成{finish}</span> / 全部 {all}
        </span>
        <button className="btn btn-danger" style={{display:finish>0 ? "block":"none"}} onClick={deleteTodo}>清除已完成任务</button>
      </div>
    )
  }
}