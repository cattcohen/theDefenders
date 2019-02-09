var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
  app.get('/', authController.index);

  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.get('/logout', authController.logout);

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
    })
  );

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
    })
  );

  //If user not logged in then redirect to signin page
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }

  app.get('*', authController.notfound);
};
