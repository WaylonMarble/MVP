import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './components/App'
import Fridge from './components/Fridge'
import Freezer from './components/Freezer'
import Records from './components/Records'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={
        <React.StrictMode>
          <App />
        </React.StrictMode>}
      />
      <Route path="/fridge" element={
        <React.StrictMode>
          <Fridge />
        </React.StrictMode>}
      />
      <Route path="/freezer" element={
        <React.StrictMode>
          <Freezer />
        </React.StrictMode>}
      />
      <Route path="/records" element={
        <React.StrictMode>
          <Records />
        </React.StrictMode>}
      />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
