const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CURRENT_TIMESTAMP = Date.now();

const MantenimientoModel = sequelize.define(
  "Mantenimientos",
  {
    det_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    det_maquina_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_repuesto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    det_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: CURRENT_TIMESTAMP
    }
  },
  {
    tableName: "detalle_mantenimiento",
    timestamps: false,
  }
);

module.exports = {
  MantenimientoModel,
};
