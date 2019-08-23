/*
 * @Author: longhai.wang
 * @Date: 2019-08-14 20:35:40
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-16 17:53:50
 * @Description: 
 * @jira: 
 */
const createStore = (reducer, preloadedState, enhancer) => {

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let state = preloadedState;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => { listener(state); });
  }

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  }

  return { dispatch, getState, subscribe };
}

export default createStore;