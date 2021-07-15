import React, { Component } from 'react';
import axios from "axios";
export default class App extends Component {
  getCarsData =() =>{
    axios.get("http://localhost:3000/api2/cars").then(res=>console.log(res.data)).catch(error=>console.log(error))
  }
  getStudentsData =() =>{
    axios.get("http://localhost:3000/api1/students").then(res=>console.log(res.data)).catch(error=>console.log(error))
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getCarsData} >获取汽车数据</button>
      </div>
    )
  }
}
