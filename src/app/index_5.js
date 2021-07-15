import React from 'react';
import ReactDOM from 'react-dom';
import  * as echarts from "echarts";
import './index.css'


//指定图表的配置项和数据
let option = {
  //标题	
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
};

class ComLife extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      msg:"hello world"
    }
    console.log("构造函数")
  }
  /**组件将要渲染 */
  componentWillMount() {
    console.log("组件将要渲染")
 }
 /**组件渲染完毕 */
  componentDidMount() {
      // console.log("组件渲染完毕")
      let myChart =echarts.init(document.getElementById('map'))
      myChart.setOption(option)
  }
  /**组件将要接收props数据 */
  componentWillReceiveProps(newProps) {
        console.log("组件将要接收props数据")
  }
  /**组件接收新的state 或者 props,判断是否更新返回布尔值 */
  shouldComponentUpdate(newProps, newState) {
        return true;
  }
  /**组件将要更新 */
  componentWillUpdate(nextProps, nextState) {
        console.log("组件将要更新");
        console.log(nextProps);
        console.log(nextState);
  }
  /**组件已经更新 */
  componentDidUpdate(prevProps, prevState) {
        console.log("组件已经更新");
        console.log(prevProps);
        console.log(prevState);
  }
  /**组件将要卸载 */
  componentWillUnmount() {
        console.log("组件将要卸载")
  }
  render() {
    console.log("render渲染函数")
    return (
      <div>
        <h3 onClick={()=>this.setState({msg:Math.floor(Math.random()*100)+"wwwp"})}>标题666</h3>
        <div>{this.state.msg}</div>
        <div id="map"></div>
      </div>
    )
  }
}

class PanterCom extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        isShow:true
      }
  }
  render() {
    if(this.state.isShow){
      return(
        <div>
          <button onClick={()=>this.setState({isShow:false})}>卸载组件</button>
          <ComLife/>
        </div>
      )
    }else {
      return (
        <div>
          <h3>组件已卸载</h3>
          <button onClick={()=>this.setState({isShow:true})}>返回组件</button>
        </div>
      )
    }
  }
}

ReactDOM.render(
  <PanterCom/>,
  document.getElementById('root')
)