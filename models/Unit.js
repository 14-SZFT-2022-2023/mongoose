const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'Az egység megadása kötelező!'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Unit', unitSchema);
