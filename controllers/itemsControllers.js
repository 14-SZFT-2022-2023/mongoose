const Item = require('../models/Item');

const getItemsRoute = async (req, res) => {
    const items = await Item.find();
    const active = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
    ];
    res.render('items', { items, active: active });
};

module.exports = { getItemsRoute };
