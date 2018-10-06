
const path = require('path');
import ReactDOMServer from 'react-dom/server';
import React from 'react';


module.exports = function setupRoute(boringApp) {

  const {
    logger,
    paths
   } = boringApp;
    
  const { endpoint, get, entrypoint } = boringApp.decorators.router;


  @endpoint()
  class Home {



    
    @get('/business')
    @entrypoint(path.normalize(paths.app_dir + '/client/pages/business/entrypoint.js'))
    serveHomePage(req, res) {
      

      res.send(`
      <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    ${res.locals.css_injections}
  </head>

  <body style="background-color: #fafafa;">
    <div id="react">
    </div>
    ${res.locals.js_injections}
  </body>
</html>

      
      
      `);
    } 

  }
  
}
