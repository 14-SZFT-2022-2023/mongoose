const Buyer = require('../models/Buyer');

const getBuyersRoute = async (req, res) => {
    const buyers = await Buyer.find();
    const active = [
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    res.render('buyers', { buyers, active: active });
};

module.exports = { getBuyersRoute };
