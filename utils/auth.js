const withAuth = (req, res, next) => {
    if (!req.session.login) {
      res.redirect('/profile/login');
      return
    } else {
      next();
    }
  };
  
  module.exports = withAuth;