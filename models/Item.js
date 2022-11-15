const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
      required: true,
      unique: true,
    },
    kategoria: {
      type: String,
      required: true,
    },
    ar: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);
