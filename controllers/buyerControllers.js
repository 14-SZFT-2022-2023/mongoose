const Buyer = require('../models/Buyer');

const getBuyerRoute = (req, res) => {
    const active = [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    res.render('buyer', { active: active });
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

const deleteBuyerRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const buyer = await Buyer.findByIdAndDelete({ _id: id });
        res.redirect('/buyers');
    } catch (error) {
        console.log(error.message);
    }
};

const getUpdateBuyerRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const buyer = await Buyer.findById({ _id: id });
        const active = [true, false, false, false, false];
        res.render('buyer_edit', { buyer, active });
    } catch (error) {
        console.log(error.message);
    }
};

const postUpdateBuyerRoute = async (req, res) => {
    try {
        const _id = req.params.id;
        const nev = req.body.nev;
        const varos = req.body.varos;
        const utca = req.body.utca;
        const hazszam = req.body.hazszam;
        const iranyitoszam = req.body.iranyitoszam;
        const cim = { varos, utca, hazszam, iranyitoszam };
        const admin = req.body.admin;
        let isAdmin = false;
        if (admin == 'on') {
            isAdmin = true;
        }
        const buyer = await Buyer.findByIdAndUpdate(_id, { nev, cim, isAdmin });
        res.redirect('/buyers');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getBuyerRoute,
    postBuyerRoute,
    deleteBuyerRoute,
    getUpdateBuyerRoute,
    postUpdateBuyerRoute,
};
