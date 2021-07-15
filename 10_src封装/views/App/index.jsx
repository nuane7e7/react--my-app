import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink  to="/about"><h4>About</h4></MyNavLink>
              <MyNavLink  to="/home"><h4>Home</h4></MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <NavLink activeClassName="1-2 active"  className="list-group-item " {...this.props}/>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <h3>我是Home组件</h3>
    )
  }
}




class About extends Component {
  render() {
    return (
      <h3>
        我是About组件
      </h3>
    )
  }
}
