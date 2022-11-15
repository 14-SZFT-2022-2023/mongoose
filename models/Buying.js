const mongoose = require('mongoose');

const buyingSchema = new mongoose.Schema(
  {
    id: Number,
    items: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item',
      },
    ],
    buyer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Buyer',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Buying', buyingSchema);
