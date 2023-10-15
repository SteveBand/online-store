const secretJwt = "RandomsecretTokenMadeBySteveBandarker";
const jwt = require("jsonwebtoken");

const getUser = (req) => {
  if (!req.headers.authorization) {
    return null;
  } else {
    const data = jwt.decode(req.headers.authorization, secretJwt);
    return data;
  }
};

exports.secretJwt = secretJwt;
exports.getUser = getUser;
