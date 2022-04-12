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

router.post(
  "/:movieId/reviews", reviewValidator, 
  asyncHandler(async (req, res) => {
    const { review } = req.body;
    const { userId } = req.session.auth; 
    const { movieId } = req.params.movieId; 
    const reviewText = await db.Review.create({
      userId,
      movieId,
      review, 
    })
    console.log(reviewText)
    return res.json( { reviewText })
  })
)


module.exports = router;
