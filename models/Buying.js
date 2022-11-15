const mongoose = require('mongoose');

const buyingSchema = new mongoose.Schema(
  {
    id: Number,
    nev: {
      type: String,
      required: true,
      unique: true,
    },
    cim: {
      type: String,
      required: true,
    },
    buyer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Buyer',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Buying', buyingSchema);
