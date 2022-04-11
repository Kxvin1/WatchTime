var express = require('express');
const bcrypt = require('bcryptjs');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
var router = express.Router();
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Login Page
router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('login', {
    title: "Login Page",
    csrfToken: req.csrfToken()
  })
}))

const loginValidators = [
  check('email')
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
//Register Page
router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();// initialize a new user to pass into the user-register view
  res.render('register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  // TODO Define the user validators.
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 25 })
    .withMessage('First Name must not be more than 25 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 50 })
    .withMessage('Email Address must not be more than 50 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

router.post('/register', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      username,
      email,
      password,
    } = req.body;

    const user = db.User.build({
      username,
      email,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);//
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/');

    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);


module.exports = router;
