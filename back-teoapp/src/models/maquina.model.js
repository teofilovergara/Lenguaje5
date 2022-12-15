const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const MaquinaModel = sequelize.define(
  "Maquinas",
  {
    maq_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    maq_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maq_comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maq_tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maq_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    }
  },
  {
    tableName: "maquinas",
    timestamps: false,
  }
);

module.exports = {
  MaquinaModel,
};
