const { DataTypes } = require("sequelize");
const db = require("../connection/db");

const Product = db.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Product;


