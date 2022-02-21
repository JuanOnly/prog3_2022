const express = require("express");
const clientSchema = require("../models/client");
const route = express.Router();

// Crear la ruta para creacion de usuarios
route.post("/client", (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// listar los usuarios existentes
route.get("/clients", (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Mostrar info de usuario especifico
route.get("/clients/:id", (req, res) => {
  const id = req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un usuario especifico
route.delete("/clients/:id", (req, res) => {
  const { id } = req.params;
  clientSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Editar un recurso especifico
route.put("/clients/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastname,
    address: { city, code_zip, lat, length },
    account_bank,
  } = req.body;
  clientSchema
    .put(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          address: { city, code_zip, lat, length },
          account_bank,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = route;
