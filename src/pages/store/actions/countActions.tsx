// countAction.js

import { ADD_COUNT, REDUCE_COUNT } from "../actionType";

export function addCount() {
  return {
    type: ADD_COUNT
  };
}

export function reduceCount(num) {
  return {
    type: REDUCE_COUNT,
    num
  };
}
