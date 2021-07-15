import React from 'react';
import ReactDOM from 'react-dom';
import './login.css'

function UserGreet(props){
    return (<h4>欢迎登陆</h4>)
}

function UserLogin(props){
 return (<h4>请先登录</h4>)
}

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       isLogin:false,
    }
  }
  render() {
    return (
      <div>
      <h3>这是头部</h3>
      {this.state.isLogin ?  <UserGreet /> : <UserLogin />}
     <h3>这是尾部</h3>
     <button className={this.state.isLogin ? 'login' :'quit'} onClick={()=>this.setState({isLogin :false })}>退出</button>
     <button className={!this.state.isLogin ? 'login' :'quit'} onClick={()=>this.setState({isLogin :true })}>登陆</button>
     </div>
     )
  }
}

ReactDOM.render(
  <Login/>,
  document.getElementById('root')
)