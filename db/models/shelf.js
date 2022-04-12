"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define(
    "Shelf",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      watchStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Shelf.associate = function (models) {
    // associations can be defined here

    //   + Shelves Table
    // - Many to Many: Shelf hasMany Movie
    const columnMapping = {
      through: "WatchList",
      otherKey: "movieId",
      foreignKey: "shelfId",
    };
    Shelf.belongsToMany(models.Movie, columnMapping);

    // - Many to One: Shelf belongsTo User
    Shelf.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Shelf;
};
