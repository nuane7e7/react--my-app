import React, { Component } from 'react';
import Message from "./Message";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import { Route, Switch, Redirect } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home组件</h3>
        <div>
          <div >
            <ul style={{paddingBottom:"5px"}} className="nav nav-tabs">
              <li>
                <MyNavLink to="/home/news">News</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/home/message">Message</MyNavLink>
              </li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/message" component={Message} />
              {/* 默认路由 */}
              <Redirect to="/home/news"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}