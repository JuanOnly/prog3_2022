const mongoose = require("mongoose");
const product_schema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cant: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("product_document", product_schema);
