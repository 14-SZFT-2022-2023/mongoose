const Category = require('../models/Category');

const getCategoriesRoute = async (req, res) => {
    const categories = await Category.find();
    const active = [
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
    ];
    res.render('categories', { categories, active: active });
};

module.exports = { getCategoriesRoute };
