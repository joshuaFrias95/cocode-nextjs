const { DataTypes } = require("sequelize");
import sequelize from "@/libs/db";
import Proyecto from "../proyectos/Proyecto.model";

// 

const Tarea = sequelize.define("terea", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    colaborador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "tareas", 
  }
);

export default Tarea;
