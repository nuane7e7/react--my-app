import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/index.css"

class PanterCom extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        navList:["疫情地图","最新进展","广州疫情","直击现场"],
        tabIndex:0,
        barStyle:{
          left:'22px'
        }
      }
  }
  render() {
   return (
   <div className="App">
      <div className="nav">
        {
          this.state.navList.map((item,index)=>{
            return (
              <div onClick={() =>this.setState({ tabIndex :index,  barStyle:{left:index*88+22+'px' }}) } className={"navItem " + (index === this.state.tabIndex ? "active":"")} key={index}>{item}</div>
            )
          })
        }
        <div className="bar" style={this.state.barStyle}></div>
      </div>
      <NewsCom/>
   </div>
   )
  }
}
class NewsCom extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        navList:["疫情地图","最新进展","广州疫情","直击现场"]
      }
  }
  render() {
    return (
      <div>
        {`12345678`}
      </div>
    )
  }
}
ReactDOM.render(
  <PanterCom/>,
  document.getElementById('root')
)