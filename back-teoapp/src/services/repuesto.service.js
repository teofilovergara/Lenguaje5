const { RepuestoModel } = require("../models/repuesto.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  try {
    
    const repuestoModelResults = await RepuestoModel.findAll();
    
    const repuestosArray = new Array();
    for (let i = 0; i < repuestoModelResults.length; i++) {
      const repuestosResult = repuestoModelResults[i];
      repuestosArray.push(repuestosResult.dataValues);
    }
    
    return repuestosArray;

  } catch (error) {
    
  }
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let repuestosResults = await sequelize.query(
    `SELECT *
                                              FROM repuestos
                                              WHERE UPPER (rep_nombre) LIKE :q
                                              OR UPPER (rep_tipo) LIKE :q
                                              ORDER BY rep_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //repuestosResults = (repuestosResults && repuestosResults [0]) ? repuestosResults[0] : [];

  console.log("repuestosResults", repuestosResults);

  return repuestosResults;
};


// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const repuestoModelResults = await RepuestoModel.findByPk(codigo);

  if (repuestoModelResults) {
    return repuestoModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const repuestoModelResults = await RepuestoModel.create(data);

  if (repuestoModelResults) {
    return repuestoModelResults.dataValues;
  } else {
    return null;
  }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const repuestoModelCount = await RepuestoModel.update(data, {
    where: {
      rep_id: id,
    },
  });
  console.log("update data", repuestoModelCount.datavalues);
  return data;
};



// Eliminar en la Base de datos

const remove = async (rep_id) => {
  console.log("remove codigo", rep_id);
  
  const repuestoModelCount = await RepuestoModel.destroy({
    where: {
      rep_id,
    },
  });
  
  if (repuestoModelCount > 0) {
    return true;
  } else {
    return false;
  }
};


module.exports = {
  list,
  listFilter,
  create,
  getById,
  update,
  remove,
};
