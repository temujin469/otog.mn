const CustomError = require('../customErrors');

const chechPermissions = (requestUser, resourceUserId) => {
  // console.log(requestUser);
  // console.log(resourceUserId);
  // console.log(typeof resourceUserId);
  if (requestUser.role === 'ADMIN') return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthorizedError(
    'та энэ resource руу хандах эрхгүй байна'
  );
};

module.exports = chechPermissions;