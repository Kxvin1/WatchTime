const express = require("express");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

const reviewValidator = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a message")
    .isLength({ max: 255 })
    .withMessage("Review must be less than 255 characters."),
];

router.get(
  "/:movieId",
  asyncHandler(async (req, res, next) => {
    const movieId = req.params.movieId;
    const movieData = await db.Movie.findOne({
      where: {
        id: movieId,
      },
    });
    res.json({ movieData });
  })
);

module.exports = router;
