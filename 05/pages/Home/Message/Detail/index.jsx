import React, { Component } from 'react'
// import qs from "querystring";

const DetailData=[
  {id:"1",content:"你好，js"},
  {id:"2",content:"你好，vue"},
  {id:"3",content:"你好，react"},
]
export default class Detail extends Component {
  
  render() {
    /**接收parmas参数 */
   const {id,title} = this.props.match.params
  // console.log(this.props.match.params)
  /**接收search参数 */
  // const {id,title} = qs.parse(this.props.location.search.slice(1)) 
  /**接收state参数 */
  // const {id,title} = this.props.location.state || {}
  console.log(this.props)
  const findData = (DetailData.find(item=>item.id===id) || {}).content 
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findData}</li>
      </ul>
    )
  }
}
