import React, { Component } from 'react';

import { Route, Switch,Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Header from "../../components/Header";
export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about"><h4>About</h4></MyNavLink>
              <MyNavLink to="/home"><h4>Home</h4></MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* 默认路由 */}
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}







