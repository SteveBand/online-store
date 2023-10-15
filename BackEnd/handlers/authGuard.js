const jwt = require("jsonwebtoken");
const { secretJwt } = require("./config");

function authGuard(req, res, next) {
  console.log(req.headers.authorization);
  jwt.verify(req.headers.authorization, secretJwt, (err, data) => {
    if (err) {
      res.status(401).send("User is not authorized");
    } else {
      next();
    }

    console.log(jwt.verify(req.headers.authorization, secretJwt));
  });
}

exports.authGuard = authGuard;
