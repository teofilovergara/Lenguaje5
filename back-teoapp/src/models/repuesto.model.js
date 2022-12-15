const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const RepuestoModel = sequelize.define(
  "Repuestos",
  {
    rep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rep_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rep_comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    rep_serial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rep_tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rep_fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: CURRENT_TIMESTAMP
    }
  },
  {
    tableName: "repuestos",
    timestamps: false,
  }
);

module.exports = {
  RepuestoModel,
};
