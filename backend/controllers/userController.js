const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../customErrors");
const { checkPermissions } = require("../utils");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const users = await User.find({ role: "USER" }).select("-password");
  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      users,
    },
  });
});

const getSingleUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(
      `${req.params.id} :ID-тай хэрэглэгч алга`
    );
  }

  checkPermissions(req.user, user._id);
  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      user
    },
  });
});

const showCurrentUser = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ user: req.user });
});

// update user with user.save()
const updateUser = asyncHandler(async (req, res, next) => {
  const { email, name, username, country, city, phone } = req.body;

  // if (!email || !name || !username || !country || !city || !phone) {
  //   throw new CustomError.BadRequestError("Шинчлэх мэдээллээ оруулан уу");
  // }

  const user = await User.findOne({ _id: req.user.userId });

  const updatedUser = await User.findOneAndUpdate({ _id: req.user.userId },req.body,{ new: true, runValidators: true });

  const jwt = user.createJWT();
  // attachCookiesToResponse(res, jwt);
  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      jwt,
      updatedUser,
    },
  });
});

const updateUserPassword = asyncHandler(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("нууц үгээ оруулна уу");
  }
  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("нууц үг буруу байна");
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      msg: "Нууц үг амжилттай шинэчлэгдсэн.",
    },
  });
});

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};

// update user with findOneAndUpdate
// const updateUser = async (req, res) => {
//   const { email, name } = req.body;
//   if (!email || !name) {
//     throw new CustomError.BadRequestError('Please provide all values');
//   }
//   const user = await User.findOneAndUpdate(
//     { _id: req.user.userId },
//     { email, name },
//     { new: true, runValidators: true }
//   );
//   const tokenUser = createTokenUser(user);
//   attachCookiesToResponse({ res, user: tokenUser });
//   res.status(StatusCodes.OK).json({ user: tokenUser });
// };
