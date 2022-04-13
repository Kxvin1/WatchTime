const express = require("express");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

const reviewValidator = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review can't be empty.")
    .isLength({ max: 255 })
    .withMessage("Review must be less than 255 characters."),
];

// get all movies
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const movieDatabase = await db.Movie.findAll();

    res.render("movies", {
      movieDatabase,
    });
  })
);

// get specific movie
router.get(
  "/:movieId",
  reviewValidator,
  asyncHandler(async (req, res, next) => {
    const movieId = req.params.movieId;
    const movieData = await db.Movie.findOne({
      where: {
        id: movieId,
      },
      include: db.Genre,
    });

    const reviews = await db.Review.findAll({
      where: {
        movieId,
      },
      order: [["id", "DESC"]],
    });
    res.render("movie-detail", {
      title: `${movieData.title}`,
      movieData,
      reviews,
    });
  })
);

// post a review
router.post(
  "/review/new",
  reviewValidator,
  asyncHandler(async (req, res) => {
    const { review, movieId } = req.body;

    const movieData = await db.Movie.findOne({
      where: {
        id: movieId,
      },
      include: db.Genre,
    });

    const userId = req.session.auth ? req.session.auth.userId : 1; // todo: edit this later to allow other users to be authenticated
    const reviews = await db.Review.findAll({
      where: { movieId },
      order: [["id", "DESC"]],
    });
    const reviewText = await db.Review.build({
      userId,
      movieId,
      review,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await reviewText.save();
      res.redirect(`/movies/${movieId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("movie-detail", {
        title: `${movieData.title}`,
        movieData,
        reviewText,
        reviews,
        errors,
      });
    }
  })
);

// update a review
router.put(
  "/review/:reviewId",
  reviewValidator,
  asyncHandler(async (req, res) => {
    const specificReview = await db.Review.findByPk(req.params.reviewId);
    const { review } = req.body;

    if (specificReview) {
      await specificReview.update({
        review,
      });
      res.render("movie-detail", {
        specificReview,
      });
    }
  })
);

// delete a review
router.delete(
  "/review/delete",
  asyncHandler(async (req, res) => {
    // auth
    const review = await db.Review.findOne({
      where: {
        id: req.params.reviewId,
      },
    });
    const curUserId = req.session.auth ? req.session.auth.userId : 1;
    if (curUserId == review.userId) {
      const specificReview = await db.Review.findByPk(req.params.reviewId);

      if (specificReview) {
        await specificReview.destroy();
        res.status(200).json({ message: "deleted successfully" }); // 204?
      }
    } else {
      res.status(200).json({ message: "deleted unsuccessfully" });
    }
  })
);

module.exports = router;
