/**
 * 1.该晚间是用于创建一个为Count组件服务的reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别为:之前的状态，动作对象
 */
import { ADDPERSON } from '../constant'
const initState = [{ name: "Tom", age: "18", id: "1"}]
export default function personReducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  switch (type) {
    case ADDPERSON:
      return [data, ...preState];
    default:
      return preState
  }
}