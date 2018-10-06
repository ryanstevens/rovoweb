
const path = require('path');
const Layout = require('../../lib/layout')
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


    // @get('/')
    // @entrypoint(path.normalize(paths.app_dir + '/client/pages/home/entrypoint.js'))
    // page(req, res) {

    //   const getAppComponents = require(path.normalize(paths.app_dir+ '/client/pages/home/AppInit.js')).default;
    //   const  { Container, getStyleSheets, store }  = getAppComponents();

    //   const mainAppHtml = ReactDOMServer.renderToString(<Container /> );

    //   res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
    //     <Layout 
    //       css_injections={res.locals.css_injections} 
    //       css={getStyleSheets()}
    //       js_injections={res.locals.js_injections}
    //       main_html={mainAppHtml}
    //       redux_state={'window.__PRELOADED_STATE__='+JSON.stringify(store.getState()).replace(/</g, '\\u003c')}>
    //     </Layout>
    //   ))
      
    // } 

    
    @get('/')
    @entrypoint(path.normalize(paths.app_dir + '/client/pages/home/entrypoint.js'))
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
