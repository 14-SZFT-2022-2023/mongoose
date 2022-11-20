const Item = require('../models/Item');
const Category = require('../models/Category');
const Unit = require('../models/Unit');

const getItemRoute = async (req, res) => {
    const categories = await Category.find();
    const units = await Unit.find();
    const active = [
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
    ];
    res.render('item', { categories, units, active: active });
};

const postItemRoute = async (req, res) => {
    try {
        const { nev, kategoria, egyseg, ar } = req.body;
        const newItem = new Item({ nev, kategoria, egyseg, ar });
        await newItem.save();
        res.redirect('/items');
    } catch (error) {
        console.log(error.message);
    }
};

const deleteItemRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndDelete({ _id: id });
        res.redirect('/items');
    } catch (error) {
        console.log(error.message);
    }
};

const getUpdateItemRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const categories = await Category.find();
        const units = await Unit.find();
        const item = await Item.findById({ _id: id });
        const active = [false, false, false, true, false];
        res.render('item_edit', { item, categories, units, active });
    } catch (error) {
        console.log(error.message);
    }
};

const postUpdateItemRoute = async (req, res) => {
    try {
        const _id = req.params.id;
        const nev = req.body.nev;
        const kategoria = req.body.kategoria;
        const egyseg = req.body.egyseg;
        const ar = req.body.ar;
        const item = await Item.findByIdAndUpdate(_id, {
            nev,
            kategoria,
            egyseg,
            ar,
        });
        res.redirect('/items');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getItemRoute,
    postItemRoute,
    deleteItemRoute,
    getUpdateItemRoute,
    postUpdateItemRoute,
};
