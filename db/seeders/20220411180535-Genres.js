'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
    {
      genre: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Comedy",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Drama",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Fantasy",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Horror",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Mystery",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Romance",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Thriller",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre: "Western",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
