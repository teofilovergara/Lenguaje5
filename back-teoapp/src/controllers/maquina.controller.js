const maquinaService = require("../services/maquina.service");
const decoder = require("../utiles/jwt.js");

const list = async (req, res) => {
  const maquina = await maquinaService.list(req.query.q);
  res.send({
    success: true,
    maquina,
  });
};

const listFilter = async (req, res) => {
  const maquina = await maquinaService.listFilter(req.query.q);
  res.send({
    success: true,
    maquina,
  });
};

const getById = async (req, res) => {
  const maquina = await maquinaService.getById(req.params.id);

  const jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["maquina"] = maquina;

  res.status(200).send(jsonResultado);
};

const create = async (req, res) => {
  const maquina = await maquinaService.create(req.body);
  res.status(200).send({
    success: true,
    maquina,
  });
};

const update = async (req, res) => {
  const maquina = await maquinaService.update(req.body, req.params.id);
  console.log("datos actualizacion", maquina);
  res.status(202).send({
    success: true,
    maquina,
  });
};

const remove = async (req, res) => {
  try {
  const booleanValue = await maquinaService.remove(req.params.id);
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
