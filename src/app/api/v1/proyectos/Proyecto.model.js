const { DataTypes } = require("sequelize");
import sequelize from "@/libs/db";

const Proyecto = sequelize.define("proyecto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  portada: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  colaboradores: {
    /* type: DataTypes.ARRAY(DataTypes.INTEGER), */
    type: DataTypes.INTEGER,
    allowNull: true,
    /*     defaultValue: [],  */
  },
  tareas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dificultad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Proyecto;
