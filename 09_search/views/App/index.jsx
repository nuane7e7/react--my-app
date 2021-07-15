import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from "axios";


export default class App extends Component {
  state= {
    data:[],
    isFirst:true,
    isLoding:false,
    err:"",
  }
  getData =(search) =>{
    if(!search) return alert(`请输入内容`)
    this.setState({isLoding:true,isFirst:false})
    axios.get("https://api.github.com/search/users",{params:{q:search}}).then(res=>{
    let {data:{items:data}} = res
       this.setState({isLoding:false,data})
       console.log(data)
    }).catch(error=>{
      console.log(error)
      this.setState({isLoding:false,err:error.meessge}) 
    })
  }
  render() {
    return (
      <div className="container">
       <Search getData={this.getData} />
       <List {...this.state} />
      </div>
    )
  }
}



class Search extends Component {
  static propTypes={
    getData:PropTypes.func.isRequired
  }
  handKeyUp  = (e) => {
    let {keyCode} =e
    if(keyCode === 13 ) {
      this.props.getData(this.search.value)
    }
  }
  render() {
    return (
      <section>
        <h3>搜索gitHub头像</h3>
        <div>
          <input type="text" ref={e=>this.search = e}   onKeyUp={(e)=> this.handKeyUp(e)} placeholder="enter the name you search" /> &nbsp;
          <button onClick={()=>{this.props.getData(this.search.value)}}>搜索</button>
        </div>
      </section>
    )
  }
}

 class List extends Component {
  static propTypes={
    data:PropTypes.array.isRequired
  }
  render() {
    let {data,isFirst,isLoding,err} = this.props
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

