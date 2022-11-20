const Unit = require('../models/Unit');

const getUnitsRoute = async (req, res) => {
    const units = await Unit.find();
    const active = [
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
    ];
    res.render('units', { units, active: active });
};

module.exports = { getUnitsRoute };
