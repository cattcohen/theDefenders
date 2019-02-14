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

// exports.save = function(req, res) {
  // user.update(
  //   {
  //     preferredlocation: req.body.location,
  //     preferredtopic: req.body.topic,
  //     preferredday: req.body.weekdayday,
  //     preferredtime: req.body.time
  //   },
  //   {
  //     where: {
  //       id: req.body.id
  //     }
  //   }
  // ).then(function(result) {
    // console.log(req.body);
    // res.redirect('dashboard');
  // });
// };
