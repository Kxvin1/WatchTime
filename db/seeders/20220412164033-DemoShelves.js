'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Shelves', [
     {userId: 1, watchStatus: "Plan to Watch", createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, watchStatus: "Watching", createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, watchStatus: "Have Watched", createdAt: new Date(), updatedAt: new Date()},
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Shelves', null, {});
  }
};
