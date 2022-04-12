const express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

async function findShelf (watchStatus, userId) {
    let shelf = await db.Shelf.findOne({
        where: {
            userId,
            watchStatus: watchStatus
        },
        include: {
            model: db.Movie
        }
    });

    return shelf.Movies
}

router.get('/', asyncHandler( async(req, res, next) => {
    const userId = req.session.auth ? req.session.auth.userId : 1; // not passing because not logged in (need to create pug file and sign in?)
    const username = req.session.auth ? req.session.auth.username: 'Demo';

    // const genres = await db.Genre.findAll();
    const watchStatus = ['Plan to Watch', 'Watching', 'Have Watched']

    const planToWatchMoviesShelf = await findShelf("Plan to Watch", userId);
    const watchingMoviesShelf = await findShelf("Watching", userId);
    const haveWatchedMoviesShelf = await findShelf("Have Watched", userId);

    res.render('watchlist', {
        username,
        planToWatchMoviesShelf,
        watchingMoviesShelf,
        haveWatchedMoviesShelf,
        watchStatus
    })
}))


module.exports = router;
