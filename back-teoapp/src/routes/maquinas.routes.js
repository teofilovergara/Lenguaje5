const maquinaController = require("../controllers/maquina.controller");
// const auhtorizationMiddleware = require("../middleware/authorization.middleware");


module.exports = (app) => {
  app.get("/maquina", maquinaController.list);
  app.get("/maquina-filter", maquinaController.listFilter);
  app.get("/maquina/find/:id", maquinaController.getById);
  app.post("/maquina/create", maquinaController.create);
  app.put("/maquina/update/:id", maquinaController.update);
  app.delete("/maquina/remove/:id", maquinaController.remove);
};
