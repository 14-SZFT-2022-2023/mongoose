const Item = require('../models/Item');

const getItemsRoute = async (req, res) => {
    const items = await Item.find();
    res.render('items', { items });
};

module.exports = { getItemsRoute };
