                       /**使用中间件 */  /**加工多个子仓库 */
 import { createStore,applyMiddleware } from 'redux'
/**异步任务必须要用的插件 */
 import thunk from "redux-thunk";

 import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";



 export default   createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))