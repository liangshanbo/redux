/*
 * @Author: 
 * @Date: 2019-08-14 21:14:34
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-15 19:56:39
 * @Description: 
 * @jira: 
 */
const combineReducers = (reducers) => {
  return (state = {}, action = {}) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, state);
  }
}

export default combineReducers;