import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dash from "./Components/Dash";
import Form from "./Components/Form";

//  const rootElement = document.getElementById("root");

 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/Dashboard" component={Dash} />
     <Route path="/Form" component={Form} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
