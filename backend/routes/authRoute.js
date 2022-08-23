const express = require('express');
const router = express.Router();

const { register, login, logout, verifyEmail } = require('../controllers/authController');

router.route('/register').post(register)
router.route('/:id/verify/:token').get(verifyEmail)
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;