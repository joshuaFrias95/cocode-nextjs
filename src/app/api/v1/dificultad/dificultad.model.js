const { DataTypes } = require("sequelize");
import sequelize from "@/libs/db";

//
const Dificultad = sequelize.define(
  "dificultad",
  {
    nombre: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    tableName: "dificultad",
  }
);

export default Dificultad;
