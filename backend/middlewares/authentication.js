const asyncHandler = require("express-async-handler");
const CustomError = require("../customErrors");
const { isTokenValid } = require("../utils");

const authenticateUser = asyncHandler(async (req, res, next) => {
  let token;
  // check header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }
  // // check cookies
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // console.log('cookies',req.cookies)
  // console.log('signed cookies',req.signedCookies)

  if (!token) {
    throw new CustomError.UnauthenticatedError("Баталгаажуулалт хүчингүй");
  }
  const authorizedUser = isTokenValid(token);

  const { userId, role } = authorizedUser;

  // user болон role ийг req объектод хавсаргана
  req.user = {
    userId,
    role,
  };
  next();
});

const authorizePermissions = (...roles) => {
  console.log(roles)
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        "Та нэ route -рүү нэвтрэх боломжгүй байна"
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
