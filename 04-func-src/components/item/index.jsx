import React ,{Component} from "react";
import PropTypes from "prop-types";
import './index.css'

export default class Item extends  Component {
  static propTypes = {
    name:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired,
    id:PropTypes.string.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    setDataState:PropTypes.func.isRequired,
  }
  state = {
    mouse :false,
  }
  render() {
    let {name,done,id,deleteTodo,setDataState} =this.props 
    let {mouse} =this.state
    /** li  移入移出事件 */
    return (
      <li style={{backgroundColor:mouse ? "#DDD" : "#FFF"}} onMouseEnter={() => this.setState({ mouse:true})} onMouseLeave={ () =>this.setState({ mouse:false})}>
      <label>
        <input type="checkbox" checked={done} onChange={(e)=>setDataState({name,id,done:e.target.checked})} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" onClick={()=>deleteTodo(id)} style={{display: mouse ? "block":'none'}}>删除</button>
    </li>
    )
  }
}