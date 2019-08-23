/*
 * @Author: 
 * @Date: 2019-08-16 16:55:17
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-16 17:04:44
 * @Description: 
 * @jira: 
 */

 import compose from './compose';

const applyMiddleware = (...middlewares) => {
  return (createStore) => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return { ...store, dispatch };
  }
}

export default applyMiddleware;