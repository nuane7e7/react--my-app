import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={() => this.back()}>回退</button>&nbsp;
          <button onClick={() => this.forward()}>前进</button>
          <button onClick={() => this.go()}>go</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)


// withRouter 加工一般组件，让一般组件具有路由组件的api