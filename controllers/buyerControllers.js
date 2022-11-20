const Buyer = require('../models/Buyer');

const getBuyerRoute = (req, res) => {
    res.render('buyer');
};

const postBuyerRoute = async (req, res) => {
    try {
        const { nev, varos, utca, hazszam, iranyitoszam } = req.body;
        const newBuyer = new Buyer({
            nev,
            cim: { varos, utca, hazszam, iranyitoszam },
        });
        await newBuyer.save();
        res.redirect('/buyers');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getBuyerRoute, postBuyerRoute };
