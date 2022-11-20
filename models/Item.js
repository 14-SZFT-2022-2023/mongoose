const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A név megadása kötelező!'],
            unique: true,
        },
        kategoria: {
            type: String,
            required: [true, 'A kategória megadása kötelező!'],
        },
        egyseg: {
            type: String,
            required: [true, 'Az egység megadása kötelező!'],
        },
        ar: {
            type: Number,
            required: [true, 'Az ár megadása kötelező!'],
            min: 1,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);
