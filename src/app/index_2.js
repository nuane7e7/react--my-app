import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css'



// function Childcom(props) {
//   let title =<h3>我是第二标题</h3>
//   let weather = props.weather
//   console.log(props)
//   let isGo = weather === "下雨" ? '在家' : '出门'
//   return (
//     <div>
//       <h3>hellword</h3>
//       {title}
//       <div>
//         是否出门？
//         <span>{isGo}</span>
//       </div>
      
//     </div>
//   )
// }
// /**类组件 */
// class HelloWorld extends React.Component {
//    render(){
//     console.log(this)
//      return (
//        <div>
//          <h4>类组件定义HELLOWORLD</h4>
//          <Childcom weather={this.props.weather} />
//          <div>Hi,{this.props.name}</div>
//        </div>
//      )
//    }
// }



// ReactDOM.render(
//   <HelloWorld weather="晴天" name="老李"/>,
//   document.querySelector("#root")
// )
// class Clock extends React.Component {
//   constructor(props){
//     super(props)
//     //状态（数据） view
//     this.state = {
//       time:new Date().toLocaleTimeString()
//     }
//   }
//     render() {
//       return (
//           <div>
//             <h3>当前时间：{this.state.time}</h3>
//             </div>
//       )
//     }
   
//     ///生命周期函数
//     componentDidMount() {
//       console.log(this)
//       setInterval(() => {
//         this.setState({
//           time : new Date().toLocaleTimeString()
//         })
//       }, 1000);
//     }
// }
// ReactDOM.render(
//    <Clock/>,
//    document.querySelector("#root")
// )
// class Tab extends React.Component {
//   constructor(props){
//     super(props)
//     this.state =  {
//       c1:"content active",
//       c2:"content"
//     }
//     this.clickEvent = this.clickEvent.bind(this)
//   }
//   clickEvent(e){
//     let index = e.target.dataset.index;
//     console.log(index)
//     if(index === "1"){
//       this.setState({
//         c1:"content active",
//         c2:"content"
//       })
//     }else{
//       this.setState({
//         c1:"content ",
//         c2:"content active"
//       })
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <button data-index="1" onClick={this.clickEvent}>内容一</button>
//         <button data-index="2" onClick={this.clickEvent}>内容二</button>
//         <div className={this.state.c1}>
//           <h3>我是内容一</h3>
//         </div>
//         <div className={this.state.c2}>
//           <h3>我是内容二</h3>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Tab/>,
//   document.getElementById('root')
// )
class  ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
         isActive : false,
         childDate:""
    }
  }
  setStyle = () => {
    this.setState({
      isActive:!this.state.isActive
    })
  }
  getChildData =(msg) => {
    this.setState({
      childDate:msg
    })
  }
  render() {
    return (
      <div>
          <button onClick={this.setStyle}>控制子元素显示</button>
          <h4>子元素传递的参数：{this.state.childDate}</h4>
          <ChildCom isActive={this.state.isActive} getChildData= {this.getChildData} />
      </div>
    )
  }
}

class ChildCom extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      msg: "你说啥？？？？",
      value:""
    }
  }
  render() {
    let strClass = null
    this.props.isActive ? strClass = "active" : strClass = ""
    return (
      <div className={"content " + strClass}>
        <h1>我是子元素</h1>
        <button onClick={this.sendData}>传递数据给父元素</button>
        <button onClick={()=>this.props.getChildData('wuliusai')}>哈哈哈</button>
        <form action="http://www.baidu.com">
          <div className="child">
              <h3>helloworld</h3>
              <button onClick={ (e)=>{this.parentEvent('111',e)}}>提交</button>
          </div>
        </form>
        
      </div>
    )
  }
  parentEvent =(data,e) => {
      console.log(data)
      console.log(e)
      e.preventDefault()
  }
  sendData = ()=>{
    console.log(this.props)
    this.props.getChildData(this.state.msg)
  }
}
ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)