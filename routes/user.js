var express = require('express');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('login', {
    title: "Login Page",
    csrfToken: req.csrfToken()
  })
}))

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid Email Address.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid Password.')
]

router.post('/login', csrfProtection, loginValidators, asyncHandler(async(req, res, next) => {
  const {
    email,
    password
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email }});

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(
        password,
        user.hashedPassword.toString()
      );

      if (passwordMatch) {
        loginUser(req, res, user);
        return res.redirect("/");
      }
  }
    errors.push("Login failed for the provided email and password.");
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  };

  res.render('login', {
    title: "Login Page",
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}));

module.exports = router;
