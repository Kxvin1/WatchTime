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

    return shelf
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
        planToWatchMoviesShelf: planToWatchMoviesShelf.Movies,
        watchingMoviesShelf: watchingMoviesShelf.Movies,
        haveWatchedMoviesShelf: haveWatchedMoviesShelf.Movies,
        watchStatus
    })
}))

router.post('/', csrfProtection, asyncHandler( async(req, res, next) => {
    const { movieId, watchStatus } = req.body;
    const userId = req.session.auth ? req.session.auth.userId : 1; // not passing because not logged in (need to create pug file and sign in?)
    const shelf = await findShelf(userId, watchStatus);
    console.log(shelf.id);

    const watchlist = await db.WatchList.create({
        shelfId: shelf.id,
        movieId
    })
    // either redirect them to their watchlist or leave on movie page

}))

router.put('/:watchlistId', asyncHandler( async(req, res, next) => {
    // update the watch status for the selected movie
    // refresh the watchlist
}))

module.exports = router;
