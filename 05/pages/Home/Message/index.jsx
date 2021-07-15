import React, { Component ,lazy,Suspense } from 'react';
import {Link,Route} from 'react-router-dom';
// import Detail from './Detail';
import Loadding from '../../../components/Loadding';
const Detail=lazy(()=>import(`./Detail`))
export default class Message extends Component {
  state= {
    messageArr:[
      {id:"1",title:"消息1"},
      {id:"2",title:"消息2"},
      {id:"3",title:"消息3"}
    ]
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
          <Suspense fallback={<Loadding/>}>
          {/* 声明接收params */}
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
          {/* search参数无需接收 声明接收 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}
              {/* state参数无需接收 声明接收 */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}
          </Suspense>
      </div>
      
    )
  }
}