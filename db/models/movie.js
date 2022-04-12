"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imDbRating: {
        type: DataTypes.NUMERIC(2, 1),
        allowNull: false,
      },
      runtime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Movie.associate = function (models) {
    // associations can be defined here

    //   + Movies Table

    // - Many to Many: Movie hasMany Shelf
    const columnMapping = {
      through: "WatchList",
      otherKey: "shelfId",
      foreignKey: "movieId",
    };
    Movie.belongsToMany(models.Shelf, columnMapping);

    // - One to Many: Movie belongsTo Genre
    Movie.belongsTo(models.Genre, {
      foreignKey: "genreId",
    });

    // - One to Many: Movie hasMany Review
    Movie.hasMany(models.Review, {
      foreignKey: "movieId",
    });
  };
  return Movie;
};
