const Unit = require('../models/Unit');

const getUnitRoute = (req, res) => {
    const active = [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
    ];
    res.render('unit', { active: active });
};

const postUnitRoute = async (req, res) => {
    try {
        const { nev } = req.body;
        const newUnit = new Unit({ nev });
        await newUnit.save();
        res.redirect('/units');
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUnitRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const unit = await Unit.findByIdAndDelete({ _id: id });
        res.redirect('/units');
    } catch (error) {
        console.log(error.message);
    }
};

const getUpdateUnitRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const unit = await Unit.findById({ _id: id });
        const active = [false, false, true, false, false];
        res.render('unit_edit', { unit, active });
    } catch (error) {
        console.log(error.message);
    }
};

const postUpdateUnitRoute = async (req, res) => {
    try {
        const _id = req.params.id;
        const nev = req.body.nev;
        const unit = await Unit.findByIdAndUpdate(_id, { nev });
        res.redirect('/units');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getUnitRoute,
    postUnitRoute,
    deleteUnitRoute,
    getUpdateUnitRoute,
    postUpdateUnitRoute,
};
