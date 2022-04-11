"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT(255),
      },
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here

    //   + Reviews Table
    // - Many to One: Review belongsTo Movie
    Review.belongsTo(models.Movie, {
      foreignKey: "movieId",
    });

    // - Many to One: Review belongsTo User
    Review.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Review;
};
