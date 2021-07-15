import CountUI from "../../components/Count";

// import store from "../../redux/store";

import { connect } from "react-redux";
import {createIncrement,createDecrement,AsyncIncrement} from "../../redux/count_action";

/**使用connect()()创建并暴露一个Count的容器组件 */

/**映射数据 */
// const mapStateToProps =state =>  ({data:state});

/**映射操作数据方法 */
// const mapDisoatchToProps =dispatch=> ({createIncrement:num=>dispatch(createIncrement(num)),createDecrement:num=>dispatch(createDecrement(num)),AsyncIncrement:num=>dispatch(AsyncIncrement(num))});


export default  connect(
  // mapStateToProps
  /**简写 */
  state =>  ({data:state})
  ,
  // mapDisoatchToProps
  /**简写 自动dispatch分发 */
  {createIncrement,createDecrement,AsyncIncrement}
  )(CountUI)
