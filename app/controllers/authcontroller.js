var exports = (module.exports = {});

exports.notfound = function(req, res) {
  res.render('404');
};

exports.index = function(req, res) {
  res.render('index');
};

exports.dashboard = function(req, res) {
  res.render('dashboard', req.user);
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/');
  });
};
