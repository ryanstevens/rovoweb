const auth0config = require('@connections/auth0');
import dyanmo_utils from 'dynamo-utils';
var auth0 = require('@clients/auth0')



module.exports = function(BoringInjections) {
  
  const {
    boring
  } = BoringInjections;

  boring.before('add-hooks', function() {

    const app = boring.app;

    var Auth0Strategy = require('passport-auth0'),
    passport = require('passport');

    //passport-auth0
    var strategy = new Auth0Strategy(auth0config,
      function(accessToken, refreshToken, extraParams, profile, done) {
        return done(null, profile);
      }
    );

    passport.use(strategy);

            
    // you can use this section to keep a smaller payload
    passport.serializeUser(function(user, done) {
      done(null, {});
    });

    passport.deserializeUser(function(user, done) {

      done(null, user);
    });

    boring.after('app.use', function(ctx) {
      if (ctx.name === 'boring-session') {
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(function(req, res, next) {
          res.locals.loggedIn = false;
          if (req.session && req.session.passport && typeof req.session.passport.user !== 'undefined') {
            res.getUser = function getUser() {
              return new Promise(function(resolve, reject) {
                const User = dyanmo_utils.getModel('User');
                User.scan({
                  user_uuid: req.session.user_uuid
                }, function(err, results) {
                  if (err || results.length === 0) return reject(err);
                  resolve(results[0]);
                });
              });
            
            };
            res.locals.loggedIn = true;
          }
          next();
        });
      }
    });

    return Promise.resolve();
  });

  

  return {name: 'session'}
}