"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here

    //   + Users Table
    // - One to Many: User hasMany Review
    User.hasMany(models.Review, {
      foreignKey: "userId",
    });

    // - One to Many: User hasMany Shelf
    User.hasMany(models.Shelf, {
      foreignKey: "userId",
    });
  };
  return User;
};
