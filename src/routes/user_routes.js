const express = require("express");
const userSchema = require("../models/user");
const route = express.Router();

// Crear la ruta para creacion de usuarios
route.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// listar los usuarios existentes
route.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Mostrar info de usuario especifico
route.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un usuario especifico
route.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Editar un recurso especifico
route.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, age, email } = req.params;
  userSchema
    .put({ _id: id }, { $set: { name, lastname, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = route;
