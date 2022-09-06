const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middlewares/authentication');
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');

router.route('/').get(authenticateUser, authorizePermissions('ADMIN',"USER"), getAllUsers);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUser').put(authenticateUser, updateUser);
router.route('/updateUserPassword').put(authenticateUser, updateUserPassword);

router.route('/:id').get(authenticateUser,getSingleUser);

module.exports = router;