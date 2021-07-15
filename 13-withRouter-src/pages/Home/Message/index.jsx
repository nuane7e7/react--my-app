import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
  state= {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"}
    ]
  }
   show = (id,title)=>{
      this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  replaceShow =(id,title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // this.props.history.replace(`/home/message/detail`,{id,title})
  }
 
  render() {
    const {messageArr} =  this.state
    return (
      <div>
          <ul>
       {
         messageArr.map(item=>{
            return(
              <li key={item.id}>
                {/* 向路由传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                &nbsp;<button onClick={()=>this.show(item.id,item.title)}>push查看</button>
                &nbsp;&nbsp;<button onClick={()=> this.replaceShow(item.id,item.title)}>replace查看</button>
                 {/* 向路由传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                 {/* 向路由传递state参数 */}
                {/* <Link to={{pathname:"/home/message/detail",state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
                </li>
            )
         })
       }
      </ul>
          <hr></hr>
          {/* 声明接收params */}
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
          {/* search参数无需接收 声明接收 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}
              {/* state参数无需接收 声明接收 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}
 
      </div>
      
    )
  }
}