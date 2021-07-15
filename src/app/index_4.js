import React from 'react';
import ReactDOM from 'react-dom';

function Listitem(props) {
    return (
      <li >
      <h3>姓名：{props.data.name}</h3>
      <span>年龄:{props.data.age}</span>
    </li>
    )
}
class ListItem extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }
  render() {
    return (
      <li onClick={(e)=>this.handleCilck(this.props.data.age)}>
        <h3>姓名：{this.props.data.name}</h3>
        <span>年龄:{this.props.data.age}</span>
      </li>
    )
  }
  handleCilck =(age) => {
    alert(age)
  }
}
class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       list:[
         {name:"大白",age:14},
         {name:"小黑",age:12},
         {name:"小白",age:11},
       ],
    }
  }
  render() {
    let listArr = this.state.list.map((item,index)=>
    <div>
      <ListItem data={item} key={index}/>
    <Listitem data={item} key={index}></Listitem>
    </div>
    )
    return (
      <div>
          <ul>
            {listArr}
          </ul>
          <h4>写在一起</h4>
          <ul>
              {
                this.state.list.map((item,index)=>
                <li key={index} onClick={()=>this.hadleCil(item.age)}>
                <h3>姓名：{item.name}</h3>
                <span>年龄:{item.age}</span>
              </li>)
              }
          </ul>
     </div>
     )
  }
  hadleCil =(age) => {
    alert(age)
  }
}

ReactDOM.render(
  <Welcome/>,
  document.getElementById('root')
)