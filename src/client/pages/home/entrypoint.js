import ReactDOM from 'react-dom';
import React from 'react'
import Home from './containers/home'

ReactDOM.render(
  <Home />,
  document.querySelector('#react')
);


if (module.hot)  module.hot.accept((err) => console.log("error reloading", err));


