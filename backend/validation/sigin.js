const { isEmail, isEmpty } = require('validator');
const {empty}= require('../utils');


module.exports = signinValidation = ({ email, password }) => {
  let errors = {};

  email = !empty(email) ? email : '';
  password = !empty(password) ? password : '';

  if (!isEmail(email)) errors.email = 'Email is invalid';

  if (isEmpty(email)) errors.email = 'Email field is required';

  if (isEmpty(password)) errors.password = 'Password field is required';

  return {
    errors,
    isValid: empty(errors)
  };
};