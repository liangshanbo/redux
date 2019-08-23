/*
 * @Author: 
 * @Date: 2019-08-14 18:16:30
 * @LastEditors: longhai.wang
 * @LastEditTime: 2019-08-15 20:04:16
 * @Description: 
 * @jira: 
 */
import './App.css';
import React from 'react';
import store from './store';
import logo from './logo.svg';
import { createActions } from './redux';

const plusAction = createActions('PLUS');
const subtractAction = createActions('SUBTRACT');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{store.getState().Home.count}</p>
        <button onClick={() => { store.dispatch(plusAction()); }}>加一</button>
        <button onClick={() => { store.dispatch(subtractAction()); }}>减一</button>
      </header>
    </div>
  );
}

export default App;
