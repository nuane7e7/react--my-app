import React from 'react';
//history模式
import { BrowserRouter as Router  ,Link,Route } from "react-router-dom";

function Home() {
    return (
    <div>
      <h2>首页</h2>
    </div>
    )
}
function Me(props) {
  console.log(props)
  return (
  <div>
    <h2>个人中心</h2>
    <h2>{props.location.state.msg}</h2>
  </div>
  )
}
function Product() {
  return (
  <div>
    <h2>产品页面</h2>
  </div>
  )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let meObj = {
      pathname:"/admin/me",
      search:"?username=admin",
      hash:"#abc",
      state:{msg:"哈哈哈"}
    }
    return (
      <div id="app">
        <div>普通内容</div>
        {/* <Router>
          <Route exact path="/" component={() =>(<div>首页</div>)}></Route>
          <Route path="/me" component={() =>(<div>Me</div>)}></Route>
          <Route path="/product" component={() =>(<div>product</div>)}></Route>
        </Router> */}
        <Router >
          <div className="nav"> 
          <Link  to="/admin/">Home</Link>
          <Link to="/admin/product">Product</Link>
          <Link to={meObj}>个人中心</Link>
          </div>
              <Route path="/admin/" exact component={Home}></Route>
              <Route path="/admin/product" component={Product}></Route>
              <Route path="/admin/me" component={Me}></Route>
        </Router>
      </div>
    )
  }
}
export default  App