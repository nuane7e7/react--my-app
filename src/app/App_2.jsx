import React from 'react';
//history模式
import { BrowserRouter as Router  ,Redirect,Link,Route, Switch} from "react-router-dom";

function LoginInfo(props) {
  console.log(props)
          switch (props.loginState) {
            case 'success':
              return <Redirect to="/admin"></Redirect>
            default:
              return <Redirect to="/login"></Redirect>
          }
}

let FormCom = (props) =>{
  let objMsg= {
    pathname:"/loginInfo",
    state:{
      loginState:"success"
    }
  }
  console.log(props)
  console.log(objMsg)
  return (<div>
    <h1>表单验证</h1>
    <Link to={ objMsg }>登录验证后页面</Link>
    </div>)
}


class ChildCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
     return (
       <div>
         <button onClick={this.clickEvent}>跳转到首页</button>
       </div>
     )
  }
  clickEvent = ()=> {
    console.log(this.props.history("/",{state:true}))
  }
}
class App extends React.Component {
  render() {
    let objMsg = {pathname:"/form",state:{msg:"ddd"}}
    return (
    <div id="app">
      <Router>
      <Link to={ objMsg }>点点</Link>
        <Switch>
        <Route path="/" exact  component={()=>(<div><h2>首页</h2> <Link to="/form">点我登录</Link></div>)}></Route>
        <Route path="/form" exact  component={()=>(<FormCom></FormCom>)}></Route>
        <Route path="/login" exact  component={()=>(<h2>登录页</h2>)}></Route>
        <Route path="/logininfo" exact  component={()=>(<LoginInfo></LoginInfo>)}></Route>
        <Route path="/admin" exact  component={()=>(<div>登录成功</div>)}></Route>
        <Route path="/child" exact  component={()=>(<ChildCom></ChildCom>)}></Route>
        </Switch>
      </Router>
      </div> 
    )
  }
}
export default  App