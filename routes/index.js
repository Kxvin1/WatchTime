var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require("./utils");


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const recentRelease = await db.Movie.findAll({
    order: [["imDbRating", "DESC"]],
    limit: 10
    })
    const editorPick = await db.Movie.findAll({
      where: {
        title: ["Up", "Kiki's Delivery Service", "Parasite", "The Maze Runner"]
      }
    })
    res.render('index', { title: "Welcome to WatchTime!", recentRelease, editorPick })
  })
);

module.exports = router;
