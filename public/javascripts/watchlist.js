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
            model: db.Movie,
        }
    });

    return shelf
}

router.get('/', asyncHandler( async(req, res, next) => {
    const userId =  req.session.auth.userId; // not passing because not logged in (need to create pug file and sign in?)
    const username =  req.session.auth.username;

    const genres = await db.Genre.findAll();
    const watchStatus = ['Plan to Watch', 'Watching', 'Have Watched'];

    const planToWatchMoviesShelf = await findShelf("Plan to Watch", userId);
    const watchingMoviesShelf = await findShelf("Watching", userId);
    const haveWatchedMoviesShelf = await findShelf("Have Watched", userId);

    res.render('watchlist', {
        username,
        planToWatchMoviesShelf: planToWatchMoviesShelf.Movies,
        planToWatchMoviesShelfId: planToWatchMoviesShelf.id,
        watchingMoviesShelf: watchingMoviesShelf.Movies,
        watchingMoviesShelfId: watchingMoviesShelf.id,
        haveWatchedMoviesShelf: haveWatchedMoviesShelf.Movies,
        haveWatchedMoviesShelfId: haveWatchedMoviesShelf.id,
        genres,
        watchStatus,
    })
}))

router.post('/', csrfProtection, asyncHandler( async(req, res, next) => {
    const { movieId, watchStatus } = req.body;
    const userId =  req.session.auth.userId; // not passing because not logged in (need to create pug file and sign in?)
    const shelf = await findShelf(userId, watchStatus);
    console.log(shelf.id, movieId)

    const watchlist = await db.WatchList.create({
        shelfId: shelf.id,
        movieId
    })

    // await watchlist.save();
    // res.redirect(`/movies/${movieId}`)
}))

router.post('/:movieId/:shelfId', asyncHandler( async(req, res, next) => {
    // update the watch status for the selected movie
    const userId =  req.session.auth.userId; // not passing because not logged in (need to create pug file and sign in?)
    const shelfId = req.params.shelfId;
    const movieId = req.params.movieId;
    const { watchStatus } = req.body;
    const newShelf = await findShelf(watchStatus, userId)
        await db.WatchList.update({
          shelfId: newShelf.id,
        },
        {
            where: {
                shelfId, movieId
            }
        });
        return res.json()
}))

router.delete('/:movieId/:shelfId', asyncHandler( async(req, res) => {
    const shelfId = req.params.shelfId;
    const movieId = req.params.movieId;
    const currWatchlist = await db.WatchList.findOne({
        where: {
          shelfId,
          movieId
        }
      })

      if (currWatchlist) {
        await currWatchlist.destroy()
        res.status(200).json({ message: "Review Deletion Successful" })
      } else {
        res.status(400).json({ message: "Review Deletion Unsuccessful" })
      }
}))

module.exports = router;
