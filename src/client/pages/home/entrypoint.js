import ReactDOM from 'react-dom';
import React from 'react'
import Home from './containers/home'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <Home />,
  document.querySelector('#react')
);


if (module.hot)  module.hot.accept((err) => console.log("error reloading", err));


