'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    watchStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {});
  Shelf.associate = function(models) {
    // associations can be defined here
  };
  return Shelf;
};
