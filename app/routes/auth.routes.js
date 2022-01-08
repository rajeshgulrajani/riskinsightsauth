const { verifySignUp } = require("../middleware");
const { verifyGoogleSignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");



module.exports = function(app) {
  
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    //res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("in Auth"+res)
    next();
  });

  app.post(
    "/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post(
    "/auth/googlesignup",
    [
      verifyGoogleSignUp.checkGoogleDuplicateUsernameOrEmail
    ],
    controller.googlesignup
  );

  app.post("/auth/signin", controller.signin);
  app.post("/auth/googlesignin", controller.googlesignin);
};