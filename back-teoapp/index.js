const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "upload/" });
const bodyparser = require("body-parser");

const authorizationMiddleware = require('./src/middleware/authorization.middleware');

const app = express();
app.use(bodyparser.json());
app.use(cors());

require("./src/routes/usuario.routes")(app);
require("./src/routes/maquinas.routes")(app);
require("./src/routes/mantenimiento.routes")(app);
require("./src/routes/repuestos.routes")(app);

app.listen(3000, () => console.log("listening on PORT 3000"));
