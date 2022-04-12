'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('WatchLists', [
     {shelfId: 1, movieId: 1, createdAt: new Date(), updatedAt: new Date()},
     {shelfId: 1, movieId: 2, createdAt: new Date(), updatedAt: new Date()},
     {shelfId: 2, movieId: 3, createdAt: new Date(), updatedAt: new Date()},
     {shelfId: 2, movieId: 4, createdAt: new Date(), updatedAt: new Date()},
     {shelfId: 3, movieId: 5, createdAt: new Date(), updatedAt: new Date()},
     {shelfId: 3, movieId: 6, createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('WatchLists', null, {});
  }
};
