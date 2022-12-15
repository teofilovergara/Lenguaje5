const repuestoservice = require("../services/repuesto.service");
const decoder = require("../utiles/jwt.js");

const list = async (req, res) => {
  const repuesto = await repuestoservice.list(req.query.q);
  res.send({
    success: true,
    repuesto,
  });
};

const listFilter = async (req, res) => {
  const repuesto = await repuestoservice.listFilter(req.query.q);
  res.send({
    success: true,
    repuesto,
  });
};

const getById = async (req, res) => {
  const repuesto = await repuestoservice.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["repuesto"] = repuesto;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const repuesto = await repuestoservice.create(req.body);
  res.status(200).send({
    success: true,
    repuesto,
  });
};

const update = async (req, res) => {
  const repuesto = await repuestoservice.update(req.body, req.params.id);
  console.log("datos actualizacion", repuesto);
  res.status(202).send({
    success: true,
    repuesto,
  });
};

 
const remove = async (req, res) => {
  try {
    
    const booleanValue = await repuestoservice.remove(req.params.id);
    res.status(202).send({
      success: booleanValue,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error
    });
}
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter,
};
