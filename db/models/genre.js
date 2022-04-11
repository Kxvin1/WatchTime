"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  Genre.associate = function (models) {
    // associations can be defined here

    // Many to One: Genre hasMany Movie
    Genre.hasMany(models.Movie, {
      foreignKey: "genreId",
    });
  };
  return Genre;
};
