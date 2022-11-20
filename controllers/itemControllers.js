const Item = require('../models/Item');
const Category = require('../models/Category');

const getItemRoute = async (req, res) => {
    const categories = await Category.find();
    res.render('item', { categories });
};

const postItemRoute = async (req, res) => {
    try {
        console.log(req.body);
        const { nev, kategoria, egyseg, ar } = req.body;
        const newItem = new Item({ nev, kategoria, egyseg, ar });
        await newItem.save();
        res.redirect('/items');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getItemRoute, postItemRoute };
