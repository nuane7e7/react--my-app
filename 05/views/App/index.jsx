import React, { /**Component,*/PureComponent, lazy, Suspense, useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
// import About from "../../pages/About";
// import Home from "../../pages/Home";
import Header from "../../components/Header";
import Loadding from "../../components/Loadding";



const Home = lazy(() => import(`../../pages/Home`))
const About = lazy(() => import(`../../pages/About`))


export default class App extends PureComponent {
  render() {
    return (
      <div className="row">
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <Demo></Demo>
            <div className="list-group">
              <MyNavLink to="/about"><h4>About</h4></MyNavLink>
              <MyNavLink to="/home"><h4>Home</h4></MyNavLink>
              <A render={(name => <B name={name} />)}></A>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loadding />}>
                  <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    {/* 默认路由 */}
                    <Redirect to="/about"></Redirect>
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


class A extends PureComponent {
  state = {
    cardName: "&&&&&&&&",
    hasError:""
  }
  static getDerivedStateFromError(error){
    console.log(error)
    return {hasError:error}
  }
  render() {
    let { cardName,hasError } = this.state
    return (
      <div>
        <h3>我是A组件</h3>
        {/* 插槽 */}
        { hasError ?<h3>当前网络不稳定，稍后再试</h3> : this.props.render(cardName)}
      </div>
    )
  }
}
class B extends PureComponent {
  state = {
    arr:[]
  }
  render() {
    return (
      <Fragment>
        <h3>我是B组件 {this.props.name}</h3>
        {this.state.arr.map(item=> <h5 key={item.id}>{item.name}</h5>)}
      </Fragment>
    )
  }
}

function Demo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const myRef = useRef()
  const add = () => {
    setCount(count => count + 1)
  }
  const show = () => {
    alert(myRef.current.value)
  }
  const unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <Fragment>
      <input type="text" ref={myRef} />
      <h2>当前值为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>Ref</button>
    </Fragment>
  )
}





