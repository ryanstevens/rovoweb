import ReactDOM from 'react-dom';
import React from 'react'
import getAppComponents from './AppInit'

const {Container} = getAppComponents();

ReactDOM.hydrate(
  <Container />,
  document.querySelector('#root'),
);


if (module.hot)  module.hot.accept((err) => console.log("error reloading", err));


