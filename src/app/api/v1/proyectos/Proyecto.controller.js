//no he logrado dar con la clave para separar la logica de los arcivos route.js

import Proyecto from "./Proyecto.model";

const getAllProyectos = async (_, res) => {
  const results = await Proyecto.findAll();
  return res.json(results);
};

const createProyecto = async (req, res) => {
  const result = await Proyecto.create(req.body);
  return res.status(201).json(result);
};

const getOneProyecto = async (req, res) => {
  const { id } = req.params;
  const result = await Proyecto.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
};

const removeProyecto = async (req, res) => {
  const { id } = req.params;
  await Proyecto.destroy({ where: { id } });
  return res.sendStatus(204);
};

const updateProyecto = async (req, res) => {
  const { id } = req.params;
  const result = await Proyecto.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
};

const proyectoCrontoller =  {
  getAllProyectos,
  createProyecto,
  getOneProyecto,
  removeProyecto,
  updateProyecto,
};

export default proyectoCrontoller;  