const { isLength, isEmpty, isEmail } = require('validator');
const {empty}= require('../utils');


module.exports = signupValidation = ({ fullname, email, password }) => {
  let errors = {};

  // isEmpty require string ...
  fullname = !empty(fullname) ? fullname : '';
  email = !empty(email) ? email : '';
  password = !empty(password) ? password : '';

  if (!isLength(fullname, { min: 2, max: 30 })) errors.fullname = 'Fullname must be between 2 and 30 characters';

  if (isEmpty(fullname)) errors.fullname = 'Fullname field is required';

  if (isEmpty(email)) errors.email = 'Email field is required';

  if (!isEmail(email)) errors.email = 'Email is invalid';

  if (isEmpty(password)) errors.password = 'Password field is required';

  if (!isLength(password, { min: 6, max: 30 })) errors.password = 'Password must be at least 6 characters';

  return {
    errors,
    isValid: empty(errors)
  };
};