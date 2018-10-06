
const path = require('path');
const Layout = require('../../lib/layout')


module.exports = function setupRoute(boringApp) {

  const {
    logger,
    paths
   } = boringApp;
    
  const { endpoint, get, entrypoint } = boringApp.decorators.router;


  @endpoint()
  class Home {


    @get('/')
    @entrypoint(path.normalize(paths.app_dir + '/client/pages/home/index.js'))
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
    <div id="react-entry">
    </div>
    ${res.locals.js_injections}
  </body>
</html>

      
      
      `);
    } 

  }
  
}
