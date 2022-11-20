const Buyer = require('../models/Buyer');

const getBuyersRoute = async (req, res) => {
    const buyers = await Buyer.find();
    res.render('buyers', { buyers });
};

module.exports = { getBuyersRoute };
