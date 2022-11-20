const Category = require('../models/Category');

const getCategoriesRoute = async (req, res) => {
    const categories = await Category.find();
    res.render('categories', { categories });
};

module.exports = { getCategoriesRoute };
