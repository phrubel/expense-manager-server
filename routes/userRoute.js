const express = require('express');
const {
  loginController,
  regController,
} = require('../controllers/userController');

// router obj
const router = express.Router();

// login route
router.post('/login', loginController);

// reg route
router.post('/register', regController);

// exports route
module.exports = router;
