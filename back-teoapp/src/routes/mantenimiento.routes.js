const mantenimientoController = require("../controllers/mantenimiento.controller");
// const auhtorizationMiddleware = require("../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/mantenimiento", mantenimientoController.list);
  app.get("/mantenimiento/find/:id", mantenimientoController.getById);
  app.post("/mantenimiento/create", mantenimientoController.create);
  app.put("/mantenimiento/update/:id", mantenimientoController.update);
  app.delete("/mantenimiento/remove/:id", mantenimientoController.remove);
  app.get("/mantenimiento/historial", mantenimientoController.mantenimientoHistorial);
};
