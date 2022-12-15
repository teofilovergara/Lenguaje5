const { MaquinaModel } = require("../models/maquina.model");
const { sequelize } = require("./bd.service");

const { QueryTypes } = require("sequelize");

// Consulta en la Base de datos

const list = async (query, pageStart = 1, pageLimit = 10) => {
  try {
    const maquinaModelResults = await MaquinaModel.findAll();

    const maquinasArray = new Array();
    for (let i = 0; i < maquinaModelResults.length; i++) {
      const maquinasResult = maquinaModelResults[i];
      maquinasArray.push(maquinasResult.dataValues);
    }

    return maquinasArray;
  } catch (error) {}
};

// Consulta en la Base de datos con filtro

const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let maquinasResults = await sequelize.query(
    `SELECT *
                                              FROM maquinas
                                              WHERE UPPER (maq_nombre) LIKE :q
                                              OR UPPER (maq_tipo) LIKE :q
                                              ORDER BY maq_nombre`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      type: QueryTypes.SELECT,
    }
  );

  //maquinasResults = (maquinasResults && maquinasResults [0]) ? maquinasResults[0] : [];

  console.log("maquinasResults", maquinasResults);

  return maquinasResults;
};

// Buscar en la Base de datos por codigo

const getById = async (codigo) => {
  const maquinaModelResults = await MaquinaModel.findByPk(codigo);

  if (maquinaModelResults) {
    return maquinaModelResults.dataValues;
  } else {
    return null;
  }
};

// Guardar en la Base de datos

const create = async (data) => {
  console.log("create data", data);

  const maquinaModelResults = await MaquinaModel.create(data);

  if (maquinaModelResults) {
    return maquinaModelResults.dataValues;
  } else {
    return null;
  }
};

// Actualizar en la Base de datos

const update = async (data, id) => {
  const maquinaModelCount = await MaquinaModel.update(data, {
    where: {
      maq_id: id,
    },
  });
  console.log("update data", maquinaModelCount.datavalues);
  return data;
};

// Eliminar en la Base de datos


const remove = async (maq_id) => {
  console.log("remove codigo", maq_id);

  const maquinaModelCount = await MaquinaModel.destroy({
    where: {
      maq_id,
    },
  });

  if (maquinaModelCount > 0) {
    return true;
  } else {
    return false;
  }
  try {
  } catch (error) {
    
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
