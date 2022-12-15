const mantenimientoService = require("../services/mantenimiento.service");
const decoder = require("../utiles/jwt.js");

const list = async (req, res) => {
  const mantenimiento = await mantenimientoService.list(req.query.q);
  res.send({
    success: true,
    mantenimiento,
  });
};

const mantenimientoHistorial = async (req, res) => {
  const mantenimiento = await mantenimientoService.mantenimientoHistorial();
  res.send({
    success: true,
    mantenimiento,
  });
};


const getById = async (req, res) => {
  const mantenimiento = await mantenimientoService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["mantenimiento"] = mantenimiento;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const mantenimiento = await mantenimientoService.create(req.body);
  res.status(200).send({
    success: true,
    mantenimiento,
  });
};

const update = async (req, res) => {
  const mantenimiento = await mantenimientoService.update(req.body, req.params.id);
  console.log("datos actualizacion", mantenimiento);
  res.status(202).send({
    success: true,
    mantenimiento,
  });
};

const remove = async (req, res) => {
  const booleanValue = await mantenimientoService.remove(req.params.id);
  res.status(202).send({
    success: booleanValue,
  });
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  mantenimientoHistorial
};
