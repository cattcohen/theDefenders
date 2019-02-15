module.exports = function(app, user, group, groupusers) {
  // app.get('/dashboard', function(req, res) {
  //   var User = user;
  //   var Group = group;
  //   var Groupusers = groupusers;
  // });

  app.post('/save', function(req, res) {
    var User = user;
    User.update(
      {
        preferredlocation: req.body.location,
        preferredtopic: req.body.topic,
        preferredday: req.body.weekday,
        preferredtime: req.body.time
      },
      {
        where: { id: req.body.userid }
      }
    ).then(function() {
      User.findAll({
        where: {
          id: req.body.userid
        },
        include: [group]
      });
      res.redirect('dashboard');
    });
  });
};
