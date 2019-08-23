/*
 * @Author: 
 * @Date: 2019-08-15 19:59:09
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-15 20:00:59
 * @Description: 
 * @jira: 
 */
import { createStore, combineReducers } from './redux';

const Home = (state, action) => {
  switch (action.type) {
    case 'PLUS': return { count: state.count + 1 };
    case 'SUBTRACT': return { count: state.count - 1 };
    default : return state;
  }
}

const store = createStore(combineReducers({ Home }), { Home : { count: 0 }});

export default store;