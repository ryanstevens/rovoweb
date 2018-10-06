import ReactDOM from 'react-dom';
import React from 'react'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.querySelector('#react')
);


if (module.hot)  module.hot.accept((err) => console.log("error reloading", err));


