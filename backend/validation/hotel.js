const { isEmpty } = require('validator');
const {empty}= require('../utils');

module.exports = signinValidation = ({ type, stars, name, city, address, contact, description, emailTitle, emailSubject, emailBody }) => {
  let errors = {};

  type = !empty(type) ? type : '';
  stars = !empty(stars) ? stars : '';
  name = !empty(name) ? name : '';
  city = !empty(city) ? city : '';
  address = !empty(address) ? address : '';
  contact = !empty(contact) ? contact : '';
  description = !empty(description) ? description : '';
  emailTitle = !empty(emailTitle) ? emailTitle : '';
  emailSubject = !empty(emailSubject) ? emailSubject : '';
  emailBody = !empty(emailBody) ? emailBody : '';

  if (isEmpty(type)) errors.type = 'Type field is required';
  if (isEmpty(stars)) errors.stars = 'Stars field is required';
  if (isEmpty(name)) errors.name = 'Name field is required';
  if (isEmpty(city)) errors.city = 'City field is required';
  if (isEmpty(address)) errors.address = 'Address field is required';
  if (isEmpty(contact)) errors.contact = 'Contact field is required';
  if (isEmpty(description)) errors.description = 'Description field is required';
  if (isEmpty(emailTitle)) errors.emailTitle = 'Email title field is required';
  if (isEmpty(emailSubject)) errors.emailSubject = 'Email subject field is required';
  if (isEmpty(emailBody)) errors.emailBody = 'Email body field is required';

  return {
    errors,
    isValid: empty(errors)
  };
};