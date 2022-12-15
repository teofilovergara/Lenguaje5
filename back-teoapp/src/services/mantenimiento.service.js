const { MantenimientoModel } = require("../models/mantenimiento.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  try {
    const mantenimientoModelResults = await MantenimientoModel.findAll();

    const mantenimientosArray = new Array();
    for (let i = 0; i < mantenimientoModelResults.length; i++) {
      const mantenimientosResult = mantenimientoModelResults[i];
      mantenimientosArray.push(mantenimientosResult.dataValues);
    }

    return mantenimientosArray;
  } catch (error) {}
};

const mantenimientoHistorial = async (query, pageStart = 1, pageLimit = 10) => {
  try {

    let mantenimientoHistorialResult = await sequelize.query(
      `SELECT * from detalle_mantenimiento dm 
      inner join usuarios u ON det_usuario_id = usu_codigo
      inner join maquinas m ON det_maquina_id = maq_id
      inner join repuestos r ON det_repuesto_id = rep_id`,
    )
    return mantenimientoHistorialResult;
    } catch (error) {
      console.log(error);
    }
  };

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const mantenimientoModelResults = await MantenimientoModel.findByPk(codigo);

  if (mantenimientoModelResults) {
    return mantenimientoModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const mantenimientoModelResults = await MantenimientoModel.create(data);

  if (mantenimientoModelResults) {
    return mantenimientoModelResults.dataValues;
  } else {
    return null;
  }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const mantenimientoModelCount = await MantenimientoModel.update(data, {
    where: {
      det_id: id,
    },
  });
  console.log("update data", mantenimientoModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos

const remove = async (det_id) => {
  console.log("remove codigo", det_id);

  const mantenimientoModelCount = await MantenimientoModel.destroy({
    where: {
      det_id,
    },
  });

  if (mantenimientoModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  create,
  getById,
  update,
  remove,
  mantenimientoHistorial
};
