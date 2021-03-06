import { ADD_COUNT, REDUCE_COUNT } from "../actionType";

// 定义初始化的数据，根据实际数据即可
const initializeState = {
  count: 1
};

// 定义reducer，第一个参数为state，赋予默认值为上边定义的initializeState，
// 第二个参数为action，并return一个state
// 并且抛出这个countReducer
export default function countReducer(state = initializeState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 };
    // 新增
    case REDUCE_COUNT:
      return { count: state.count - action.num };
    default:
      return state;
  }
}
