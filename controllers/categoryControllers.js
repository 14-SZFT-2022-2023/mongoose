const Category = require('../models/Category');

const getCategoryRoute = (req, res) => {
    res.render('category');
};

const postCategoryRoute = async (req, res) => {
    try {
        const { nev } = req.body;
        const newCategory = new Category({ nev });
        await newCategory.save();
        res.redirect('/categories');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getCategoryRoute, postCategoryRoute };
