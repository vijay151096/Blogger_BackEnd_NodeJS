const express = require('express')
const router = express.Router();
const authController = require("../controller/authController")
const authenticate = require('../middleware/authenticate')
const authorization = require('../middleware/authorization')

router.route('/login')
    .post(authController.login)

router.route('/register')
    .post(authController.register)

router.route('/credentials')
    .put(authenticate, authorization, authController.updateCredentials)

module.exports = router;