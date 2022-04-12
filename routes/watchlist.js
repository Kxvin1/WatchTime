const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get('/', asyncHandler( async(req, res, next) => {
    let shelves = db.Shelves.findAll({where: req.params.userId})
}))


module.exports = router;
