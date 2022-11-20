const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A kategória megadása kötelező!'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
