
const path = require('path');
import ReactDOMServer from 'react-dom/server';
import React from 'react';
const dynamo_utils = require('dynamo-utils');


module.exports = function setupRoute(boringApp) {

  const {
    logger,
    paths
   } = boringApp;
    
  const { endpoint, get, entrypoint } = boringApp.decorators.router;


  @endpoint()
  class Home {


    @get('/content-get/:uuid')
    contentGet(req, res) {

      const Content = dynamo_utils.getModel('Content');
      const User = dynamo_utils.getModel('User');

      Content.scan({content_uuid: req.params.uuid}, function(err, results) {
        if (err || results.length === 0) return res.send(err);
        let content = results[0];
        User.scan({user_uuid: content.user_uuid}, function(err, users) {
          let user = users[0];
          content.user = user
          res.json(content);
        });
      });
    }

    
    @get('/content/:uuid')
    @entrypoint(path.normalize(paths.app_dir + '/client/pages/content/entrypoint.js'))
    serveHomePage(req, res) {
      
    const js = res.locals.js_injections.map(script => {
      return script.replace('static', '/static');
    })
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
    ${js}
  </body>
</html>

      
      
      `);
    } 

  }
  
}
