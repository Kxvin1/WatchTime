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

// get specific movie
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

// get reviews for a movie
router.get(
  "/:movieId/reviews",
  asyncHandler(async (req, res, next) => {
    const movieId = req.params.movieId;
    const reviews = await db.Review.findAll({
      where: {
        movieId
      },
    });
    // res.json({ reviews });
    res.render('reviews', { title: 'Review', reviews})
  })
);

// post a review
router.post(
  "/:movieId/reviews",
  reviewValidator, 
  asyncHandler(async (req, res) => {
    // console.log(req.session); // => Session {
    //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
    //   }

    const { review } = req.body;
    console.log(req.body)
    const userId = req.session.auth ? req.session.auth.userId : 1; // not passing because not logged in (need to create pug file and sign in?)
    const reqKeys = Object.keys(req);
    // console.log(reqKeys);
    console.log("params:  ", req.params) 
    const movieId = req.params.movieId;
    const reviews = await db.Review.findAll({
      where: { movieId},
    })
    const reviewText = await db.Review.create({
      userId,
      movieId,
      review,
    });
    // return res.json({ reviewText });
    res.render('reviews', { title: 'Review', reviewText, reviews })
  })
);

// update a review
router.put(
  "/:movieId/reviews/:reviewId",
  reviewValidator,
  asyncHandler(async (req, res) => {
    const specificReview = await db.Review.findByPk(req.params.reviewId);
    const { review } = req.body;
    if (specificReview) {
      await specificReview.update({
        review,
      });
      res.json({
        specificReview,
      });
    }
  })
);

// delete a review
router.delete(
  "/:movieId/reviews/:reviewId",
  asyncHandler(async (req, res) => {
    // auth
    const review = await db.Review.findOne({
      where: {
        id: req.params.reviewId,
      },
    });
    // console.log("eview.userId: " + review.userId)
    const curUserId = req.session.auth ? req.session.auth.userId : 1; 
    if (curUserId == review.userId) {
      const specificReview = await db.Review.findByPk(req.params.reviewId);

      if (specificReview) {
        await specificReview.destroy();
        res.status(200).json({ message: "deleted successfully" });
      }
    } else {
      res.status(200).json({ message: "deleted unsuccessfully" });
    }
  })
);

module.exports = router;
