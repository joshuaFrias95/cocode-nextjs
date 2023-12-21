const { DataTypes } = require("sequelize");
import sequelize from "@/libs/db";

//
const Colaborador = sequelize.define(
  "colaborador",
  {
    colaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "colaboradores",
  }
);

export default Colaborador;
