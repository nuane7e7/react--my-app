import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../comoinents/item/Item';
import "./App.css"
function Good() {
  return (
    <div className="good" >React</div>
  )
}
function List(props) {
  return (
    <ul>
      {
        props.arr.map((item, i) => {
          return <Item key={item} item={item} index={i} getData={props.getData} setData={props.setData}></Item>
        })
      }
    </ul>
  )
}
class RefApp extends React.Component {
  state = {
    value: 1
  }
  getInput = (e) => {
    this.setState({
      value: Number(e.target.value)
    })
    // alert(e.target.value)
    console.log(typeof (e.target.value))
  }
  getData = (data) => {
    console.log(data.target.innerHTML)
  }
  myRef = React.createRef()
  handleRef = () => {
    alert(this.myRef.current.value)
  }
  getRefnode = (ref) => {
    this.inputRef = ref
    console.log(this.inputRef, "bbbb")
  }
  handleGetRef = () => {
    console.log(this.inputRef.value, "aaaa")
  }
  render() {
    return (
      <div>
        <input type="text" name="" ref={account => this.account = account} id="" />
        <button onClick={() => alert(this.account.value)}>点我</button>
        <input ref={account => this.account1 = account} type="number" value={this.state.value} onBlur={() => alert(this.account1.value)} onChange={(e) => this.getInput(e)} />
        <input type="text" ref={this.myRef} />
        <button onClick={this.handleRef}>点我点我</button>
        <input type="text" ref={this.getRefnode} />
        <button onClick={this.handleGetRef}>点我点我</button>
      </div>
    )
  }
}
class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }
  handleSubmit = (e) => {
    console.log(this.state.username, this.state.password)
    e.preventDefault()
  }
  render() {
    return (
      <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
        <label htmlFor="">账号：<input type="text" onChange={(e) => this.setState({ username: e.target.value })} name="username" />  </label>
        <label htmlFor="">密码：<input type="password" onChange={(e) => this.setState({ password: e.target.value })} name="password" /></label>
        <button>登录</button>
      </form>
    )
  }
}
class Life extends React.Component {
  state = {
    opacity: 1
  }
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    clearInterval(this.timer)
    this.tiemr = null
  }
  /**强制更新 */
  force = () => {
    this.forceUpdate()
  }
  //组件挂载完毕
  componentDidMount() {
    this.timer = setInterval(() => {
      let { opacity } = this.state
      if (opacity <= 0) {
        opacity = 1
      } else {
        opacity -= 0.1
      }
      this.setState({ opacity })
    }, 200);
  }
  /**组件卸载前 */
  componentWillUnmount() {
    clearInterval(this.timer)
    this.tiemr = null
  }
  /**改状态后是否允许更新 */
  shouldComponentUpdate() {
    // console.log(`正常更新`)
    return true
  }
  /**强制更新 */
  componentWillUpdate() {
    // console.log("强制更新了")
  }
  render() {
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>React................????????</h2>
        <button onClick={this.death}>去世吧！！！</button>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }
}
export default class App extends React.Component {
  state = {
    arr: ["vue", "react", "angel", "js", "html", "css", "jquery"],
    isHot: true,
    status: true,
  }

  setData = (index) => {
    let arr1 = this.state.arr
    arr1[index] = arr1[index].toLocaleUpperCase()
    this.setState({
      arr: arr1
    })
  }
  getData = (data) => {
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.setState({ isHot: !this.state.isHot })}>{"Hello " + (this.state.isHot ? "React" : "Vue")}</h1>
        <Good />
        <Login />
        <List arr={this.state.arr} setData={this.setData} getData={this.getData} />
        <div id="app">
          <RefApp />
          <Life />
        </div>

      </div>
    )
  }
}