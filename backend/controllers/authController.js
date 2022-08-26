const User = require("../models/User");
const sha256 = require("crypto-js/sha256");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../customErrors");
const { sendEmail } = require("../utils");

// register
const register = asyncHandler(async (req, res, next) => {
  const emailAlreadyExists = await User.findOne({ email: req.body.email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Имэйл аль хэдийн бүртгэгдсэн байна");
  }

  const emailToken = sha256("$12hw");
  await User.create({ ...req.body, emailToken });
  const user = await User.findOne({ email: req.body.email });
  const accessToken = user.createJWT();

  // attachCookiesToResponse(res, jwt);
  const url = `${process.env.BASE_URL}/api/v1/users/${user._id}/verify/${user.emailToken}`;

  // herglechrvv email ywuulah
  await sendEmail(user.email, "Бүртгэлээ баталгаажуулах", url);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Тань руу Имайл явууллаа баталгаажуулан уу",
    user: {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      county: user.country,
      verified: user.verified,
      accessToken,
    },
  });
});

// email batalgaajuulah
const verifyEmail = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id });
  const emailToken = await User.findOne({ emailToken: req.params.token });
  // check user token is valid
  if (token && user) {
    const verifiedUser = await User.updateOne({
      _id: user.id,
      verified: true,
    });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message:"Имайл амжилттай баталгаажлаа",
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        county: user.country,
        verified: user.verified,
        emailToken,
      },
    });
  } else {
    throw new CustomError.BadRequestError("Хүчингүй линк");
  }
});

// login
const signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Имэйл болон нууц үгээ оруулна уу");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new CustomError.UnauthenticatedError("Имэйл буруу байна");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("нууц үг буруу байна");
  }

  const accessToken = user.createJWT();

  // attachCookiesToResponse(res, jwt);

  res.status(StatusCodes.OK).json({
    success: "true",
    user: {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      county: user.country,
      verified: user.verified,
      accessToken,
    },
  });
});

// // logout
// const logout = asyncHandler(async (req, res, next) => {
//   res.cookie("token", "logout", {
//     httpOnly: true,
//     expires: new Date(Date.now() + 1000),
//   });
//   res.status(StatusCodes.OK).json({
//     success: true,
//     message: "succesfuly log out",
//   });
// });

// const refreshToken = asyncHandler(async(req,res,next)=> {
//   let = refreshTokens = [];
//   const refreshToken = req.body.token;

//   if(!refreshToken) throw new CustomError.UnauthenticatedError("Your are not authenticated")

// })

module.exports = {
  register,
  signin,
  verifyEmail,
};
