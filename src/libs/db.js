
import axios from "axios";

export const conn = axios.create({
  baseURL: process.env.DATABASE_URL,
});
