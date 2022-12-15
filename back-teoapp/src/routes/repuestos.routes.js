const repuestoController = require("../controllers/repuesto.controller");
// const auhtorizationMiddleware = require("../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/repuestos", repuestoController.list);
  app.get("/repuestos-filter", repuestoController.listFilter);
  app.get("/repuesto/find/:id", repuestoController.getById);
  app.post("/repuesto/create", repuestoController.create);
  app.put("/repuesto/update/:id", repuestoController.update);
  app.delete("/repuesto/remove/:id", repuestoController.remove);
};
