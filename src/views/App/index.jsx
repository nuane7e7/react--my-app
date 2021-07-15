import React from 'react';

import './App.css'

export default  class App extends React.Component {
  state= {
    newList:[],
    status:false
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let {newList} = this.state
      let news = `新闻${newList.length+1}`
      this.setState({newList:[news,...newList]})
    }, 2000);
  }

  getSnapshotBeforeUpdate() {
    console.log(this.list.scrollHeight)
    return this.list.scrollHeight
  }
 closeTime =() => {
  clearInterval(this.timer)
  this.timer =null
 }
  componentDidUpdate(preProps,preState,height) {
    return this.list.scrollTop += this.list.scrollHeight- height
  }
     render() {
       let {newList,status} = this.state
       return(
        <div>
         <div ref={list=>this.list=list}  className="list">
           {
             newList.map((item,i)=>{
               return <div key={i} className="news">{item}</div>
             })
           }
          

           </div>
           <div>
             {status ? <button onClick={()=>{this.setState({status:false});}}>正</button> :<button onClick={()=>{this.setState({status:true})}}>反</button>}
           </div>
         </div>
       )
     }
}