                       /**使用中间件 */
 import { createStore,applyMiddleware } from 'redux'
/**异步任务必须要用的插件 */
 import thunk from "redux-thunk";
 import countReducer from "./count_reducer";





 export default   createStore(countReducer,applyMiddleware(thunk))