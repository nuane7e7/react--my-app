import React, { Component } from 'react'
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/actions/Person";

class Person extends Component {
  add=()=>{
    let name= this.nameNode.value
    let age= this.ageNode.value*1
    this.props.addPerson({age,name,id:nanoid()})
    this.nameNode.value = ""
    this.ageNode.value = ""
  }
  render() {
    console.log(this.props)
    let {persons} =this.props
    return (
      <div>
        <h2>我是Person组件 ---------上面的结果是{this.props.count}</h2>
        <input ref={c=>this.nameNode=c} type="text" placeholder="请输入名字"/>
        <input ref={c=>this.ageNode=c}  placeholder="请输入年龄" type="text"/>
        <button onClick={this.add}>添加</button>
        <ul>
          {persons.map(item=>
              <li key={item.id}>
                {`姓名：${item.name}--年龄${item.age}`}
              </li>
            )}
        </ul>
      </div>
    )
  }
}

export default  connect(state=>({persons:state.Person,count:state.Count}),{addPerson})(Person)