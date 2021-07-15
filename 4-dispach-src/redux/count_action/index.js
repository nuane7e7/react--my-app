import {INCREMENT,DECREMENT} from '../constant'
/**同步action 就是指action的职位Object类型的一般对象 */
export const createIncrement = data=>({type:INCREMENT,data});   
export const createDecrement = data=>({type:DECREMENT,data})
/**异步action,就是指action的值为函数，异步action中异步都会调用同步的action */
export const AsyncIncrement = (data,time)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(createIncrement(data))
    }, time);
  }
  
}
  

