import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import {browserHistory} from 'react-router-dom';
// import { createBrowserHistory } from 'history';

ReactDOM.render(
  <BrowserRouter /*history={browserHistory}*/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);