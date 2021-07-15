import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import PubSub from 'pubsub-js';
// import axios from "axios";


export default class App extends Component {
  
  render() {
    return (
      <div className="container">
       <Search />
       <List  />
      </div>
    )
  }
}



class Search extends Component {
  handKeyUp  = (e) => {
    let {keyCode} =e
    if(keyCode === 13 ) {
      this.getData(this.search.value)
    }
  }
  getData =async (search) =>{
    if(!search) return alert(`请输入内容`)
    PubSub.publish("getList",{isLoding:true,isFirst:false})
    // axios.get("https://api.github.com/search/users",{params:{q:search}}).then(res=>{
    // let {data:{items:data}} = res
    // PubSub.publish("getList",{isLoding:false,data})
    //    console.log(data)
    // }).catch(error=>{
    //   console.log(error)
    //   PubSub.publish("getList",{isLoding:false,err:error.meessge,data:[]})
    // })
    try {
      const res =await fetch(`https://api.github.com/search/users?q=${search}`)
      const {items:data}= await res.json()
      console.log(data)
       PubSub.publish("getList",{isLoding:false,data})
    } catch (error) {
      console.log(error)
        PubSub.publish("getList",{isLoding:false,err:error.meessge,data:[]})
    }
  }
  render() {
    return (
      <section>
        <h3>搜索gitHub头像</h3>
        <div>
          <input type="text" ref={e=>this.search = e}   onKeyUp={(e)=> this.handKeyUp(e)} placeholder="enter the name you search" /> &nbsp;
          <button onClick={()=>{this.getData(this.search.value)}}>搜索</button>
        </div>
      </section>
    )
  }
}

 class List extends Component {
  state= {
    data:[],
    isFirst:true,
    isLoding:false,
    err:"",
  }
  componentDidMount() {
   this.pubsub= PubSub.subscribe("getList",(_,data)=>{
      this.setState({...data})
      console.log(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.pubsub)
  }
  render() {
    let {data,isFirst,isLoding,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎领导位列参观</h2> : isLoding ? <h2>加载中。。。。。。</h2> : err ? <h2 style={{color:"red"}}>{err}</h2>:
        data.map(item =>{
          return <div className="card" key={item.id}>
            <a href={item.html_url} target="_blank" rel="noreferrer">
            <img src={item.avatar_url} alt="avatar" style={{width:'100px'}}/>
            </a>
              <p>{item.login}</p>
          </div>
        })}
      </div>
    )
  }
}

