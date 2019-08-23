/*
 * @Author: 
 * @Date: 2019-08-14 18:16:30
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-15 20:02:52
 * @Description: 
 * @jira: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();

store.subscribe(() => { 
  console.log('getState', store.getState()); 
  render();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
