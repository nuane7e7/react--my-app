import React from 'react';
import ReactDOM from 'react-dom';

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
        <h3>组件插槽</h3>
        {this.props.children}
        <ChildCom>
              <h2 data-position="header">头部</h2>
              <h2 data-position="main">主体</h2>
              <h2 data-position="footer">尾部</h2>
        </ChildCom>
   </div>
   )
  }
}
class RootCom extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        arr:[1,2,3]
      }
  }
  render() {
    return (
      <PanterCom>
        <h4 data-name="a" data-index={this.state.arr[0]}>子组件1</h4>
        <h4 data-name="b" data-index={this.state.arr[1]}>子组件2</h4>
        <h4 data-name="c" data-index={this.state.arr[2]}>子组件3</h4>
      </PanterCom>
    )
  }
}
class ChildCom extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render () {
    let headerCom,mainCom,footerCom;
    this.props.children.forEach((item,index) =>{
      console.log(item.props['data-position'])
        switch (item.props['data-position']) {
          case 'header':
            headerCom = item
            break;
          case 'main':
            mainCom = item
            break;
        
          default:footerCom =item
            break;
        }
    })
    return (
      <div>
        <div className="header">{headerCom}</div>
        <div className="main">{mainCom}</div>
        <div className="footer">{footerCom}</div>
      </div>
    )
  }
}
ReactDOM.render(
 <RootCom/>,
  document.getElementById('root')
)