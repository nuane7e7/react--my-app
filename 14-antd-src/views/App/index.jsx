import React, { Component } from 'react';
import { Button,DatePicker } from 'antd';
import { SearchOutlined,WechatOutlined } from '@ant-design/icons';
export default class App extends Component {
  state= {
    form:{
      startTime:"",
      endTime:"",
      maxNum:""
    }
  }
  onChange = (time) => {
    console.log(time)
    let data = this.state.form
    let form= {...data,startTime:time[0],endTime:time[1]}
    console.log(form)
    this.setState({form})
  }
  getData =() =>{
    console.log(this.state)
  }
  render() {
    const { RangePicker } = DatePicker;
    return (
      <div>
       <Button type="primary" icon={<SearchOutlined />}>Primary Button</Button>
       <Button type="link" onClick={this.getData}>点我</Button>
       <WechatOutlined style={{color:"#67C23A",fontSize:"20px"}} />
       <RangePicker  format="YYYY-MM-DD"  onChange={(a,time)=>this.onChange(time)}/>
      </div>
    )
  }
}
