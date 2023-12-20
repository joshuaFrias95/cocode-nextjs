
// import axios from "axios";
//
// export const conn = axios.create({
//   baseURL: process.env.DATABASE_URL,
// });
// import { Sequelize } from "sequelize";

const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.DB,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      required: false,
    },
  },
  define: {
    timestamps: false,
  },
})

sequelize.sync();
console.log("Estoy aqui")
export default sequelize;
// module.exports = sequelize;
