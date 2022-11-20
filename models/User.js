const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A név megadása kötelező!'],
        },
        email: {
            type: String,
            required: [true, 'Az e-mail megadása kötelező!'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Nem szabályos e-mail cím!'],
        },
        jelszo: {
            type: String,
            required: [true, 'A jelszó megadása kötelező'],
            minlength: [
                6,
                'A jelszónak legalább 6 karaktert tartalmaznia kell!',
            ],
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.jelszo = await bcrypt.hash(this.jelszo, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
