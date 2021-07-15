/**
 * 1.该晚间是用于创建一个为Count组件服务的reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别为:之前的状态，动作对象
 */
const initState = 0
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  console.log(action)
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    default:
      return preState
  }
}