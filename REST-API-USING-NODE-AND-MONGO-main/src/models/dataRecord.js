const mongoose = require("mongoose");
const schemaEx = new mongoose.Schema({
    name: {
      type: String,
     
    },
    email: {
      type: String,
     
    },
    password: {
      type: Number,
     
    },
    address: String,
    phone: Number,
    gender: String,
    country: String,
    state: String,
  })

  const ModelEx = new mongoose.model("ModelEx", schemaEx);

  module.exports = ModelEx;