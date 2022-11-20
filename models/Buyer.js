const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A név megadása kötelező'],
            unique: true,
        },
        cim: {
            varos: {
                type: String,
                required: [true, 'A város megadása kötelező'],
            },
            utca: {
                type: String,
                required: [true, 'Az utca megadása kötelező'],
            },
            hazszam: {
                type: String,
                required: [true, 'A házszám megadása kötelező'],
            },
            iranyitoszam: {
                type: Number,
                required: [true, 'Az irányítószám megadása kötelező'],
            },
        },
        buying: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Buying',
            },
        ],
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Buyer', buyerSchema);
