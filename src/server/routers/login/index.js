
const path = require('path');
const Layout = require('../../lib/layout')
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import dyanmo_utils from 'dynamo-utils';
import uuid from 'node-uuid';

const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/login/auth');
const auth0config = require('@connections/auth0');

module.exports = function setupRoute({paths, decorators} = boringApp) {

  const { endpoint, get, entrypoint, middleware } = decorators.router;


  @endpoint('/login')
  class Page {

    @get('/')
    @entrypoint(path.normalize(paths.app_dir + '/client/pages/login/entrypoint.js'))
    page(req, res) {

      const getAppComponents = require(path.normalize(paths.app_dir+ '/client/pages/login/AppInit.js')).default;
      const  { Container, getStyleSheets, store }  = getAppComponents();

      const mainAppHtml = ReactDOMServer.renderToString(<Container /> );

      res.send('<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
        <Layout 
          css_injections={res.locals.css_injections} 
          css={getStyleSheets()}
          js_injections={res.locals.js_injections}
          main_html={mainAppHtml}
          redux_state={'window.__PRELOADED_STATE__='+JSON.stringify(store.getState()).replace(/</g, '\\u003c')}>
        </Layout>
      ))
      
    } 

    @get('/callback')
    @middleware(passport.authenticate('auth0', { failureRedirect: '/login/fail' }))
    callback(req, res) {
      const User = dyanmo_utils.getModel('User');

      const rediectTo = req.session.lastPage || '/'

      User.query('provider_user_id').eq(req.user.user_id).exec(function(err, results) {

        if (results.length === 1) {
          req.session.user_uuid = results[0].user_uuid;
          res.redirect(rediectTo);
        }
        else {
          const uid = uuid.v4();
          console.log("USER", req.user)
          const user = new User({
            user_uuid: uid,
            provider_user_id: req.user.user_id,
            thumb: req.user.picture,
            name: req.user.displayName,
            roles: ['user']
          })
    
          req.session.user_uuid = uid;
          
          user.save(function(err) {
            res.redirect(rediectTo);
          });
        }
      });
     
    }


    @get('/auth')
    @middleware(passport.authenticate('auth0', {scope: 'openid email profile'}))
    login(req, res) {

      console.log('REDIRECTING')
      res.redirect('/')       
    }

    @get('/user')
//    @middleware(ensureLoggedIn)
    user(req, res) {

      if (!res.getUser) {
        return res.json({ loggedIn: false })
      }
      res.getUser().then(expanded_user => {
        res.json(Object.assign({loggedIn: true}, expanded_user));
      });
      
    }

    @get('/fail')
    fail(req, res) {
      res.send('fail')
    }
  }
}
