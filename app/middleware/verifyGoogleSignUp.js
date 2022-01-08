const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

async function checkGoogleDuplicateUsernameOrEmail (req, res, next) {
  const { token }  = req.body
  const ticket =  await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
  });
  const { name, email, picture } = ticket.getPayload();
  // Username
  User.findOne({
    where: {
      username: name
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};
const verifyGoogleSignUp = {
  checkGoogleDuplicateUsernameOrEmail: checkGoogleDuplicateUsernameOrEmail
};

module.exports = verifyGoogleSignUp;