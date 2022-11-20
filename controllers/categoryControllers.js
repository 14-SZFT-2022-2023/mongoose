const Category = require('../models/Category');

const getCategoryRoute = (req, res) => {
    const active = [
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    res.render('category', { active: active });
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

const deleteCategoryRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndDelete({ _id: id });
        res.redirect('/categories');
    } catch (error) {
        console.log(error.message);
    }
};

const getUpdateCategoryRoute = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById({ _id: id });
        const active = [false, true, false, false, false];
        res.render('category_edit', { category, active });
    } catch (error) {
        console.log(error.message);
    }
};

const postUpdateCategoryRoute = async (req, res) => {
    try {
        const _id = req.params.id;
        const nev = req.body.nev;
        const buyer = await Category.findByIdAndUpdate(_id, { nev });
        res.redirect('/categories');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getCategoryRoute,
    postCategoryRoute,
    deleteCategoryRoute,
    getUpdateCategoryRoute,
    postUpdateCategoryRoute,
};
