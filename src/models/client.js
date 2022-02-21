const mongoose = require("mongoose");
const client_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    code_zip: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  account_bank: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("client_document", client_schema);
