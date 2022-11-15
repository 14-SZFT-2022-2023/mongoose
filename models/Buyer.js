const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema(
  {
    buyerId: Number,
    nev: {
      type: String,
      required: true,
      unique: true,
    },
    cim: {
      type: String,
      required: true,
    },
    buying: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Buying',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Buyer', buyerSchema);
