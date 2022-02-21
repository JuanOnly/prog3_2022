const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;
const execute_app = express();
execute_app.listen(port, () => {
  // conexion al port 3000
  console.log("Listening to port", port);
});

execute_app.get("", (req, res) => {
  res.send("Prog 3");
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected with mongodb"))
  .catch((error) => console.error(error));

const userSchemaRoutes = require("./routes/user_routes");
const clientSchemaRoutes = require("./routes/client_routes");
const productSchemaRoutes = require("./routes/product_routes");
// Middleware
execute_app.use(express.json());
// Crear usuario: http://localhost:3000/dashboard/user
// Consultar usuarios: http://localhost:3000/dashboard/users
execute_app.use(
  "/dashboard",
  userSchemaRoutes,
  clientSchemaRoutes,
  productSchemaRoutes
);
