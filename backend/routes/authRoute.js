const express = require('express');
const router = express.Router();

const { register, signin, logout, verifyEmail } = require('../controllers/authController');

router.route('/register').post(register)
router.route('/:id/verify/:token').get(verifyEmail)
router.post('/signin', signin);

module.exports = router;