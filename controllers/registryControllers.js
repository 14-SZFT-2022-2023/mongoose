const User = require('../models/User');

const handleErrors = (err) => {
    // console.log(err.message, err.code);
    let errors = { nev: '', email: '', jelszo: '' };

    if (err.code === 11000) {
        errors.email = 'Ezzel az e-mail címmel már registráltak!';
        return errors;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((err) => {
            errors[err.properties.path] = err.properties.message;
        });
    }

    return errors;
};

const getRegistryRoute = (req, res) => {
    const active = [false, true, false];
    res.render('registry', { active: active });
};

const postRegistryRoute = async (req, res) => {
    try {
        const { nev, email, jelszo } = req.body;
        const newUser = new User({ nev, email, jelszo });
        const user = await newUser.save();
        // console.log(user);
        res.status(201).redirect('/');
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json(errors);
    }
};

module.exports = { getRegistryRoute, postRegistryRoute };
