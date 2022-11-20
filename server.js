// Third-party modules - Harmadik féltől származó modulok
require('dotenv').config();
const mongoose = require('mongoose');

// CommonJS modules - CommonJS modulok
const express = require('express');
const path = require('path');

// Saját modulok
const Buyer = require('./models/Buyer');
const Buying = require('./models/Buying');
const Item = require('./models/Item');

// Beállítások
const app = express();
const PORT = process.env.PORT || 3500;

// Middleware-k
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Statikus mappák a különböző route-okhoz
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/buyer', express.static(path.join(__dirname, 'public')));
app.use('/buyers', express.static(path.join(__dirname, 'public')));
app.use('/category', express.static(path.join(__dirname, 'public')));
app.use('/categories', express.static(path.join(__dirname, 'public')));
app.use('/item', express.static(path.join(__dirname, 'public')));
app.use('/items', express.static(path.join(__dirname, 'public')));

// Adatbázis csatlakozás
mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) return console.log(err);
    console.log('Csatlakoztunk!');
});

// Routes
app.use('/', require('./routes/rootRoutes'));
app.use('/buyer', require('./routes/buyerRoutes'));
app.use('/buyers', require('./routes/buyersRoutes'));
app.use('/category', require('./routes/categoryRoutes'));
app.use('/categories', require('./routes/categoriesRoutes'));
app.use('/item', require('./routes/itemRoutes'));
app.use('/items', require('./routes/itemsRoutes'));

app.get('/buying', async (req, res) => {
    const buyers = await Buyer.find();
    const items = await Item.find();
    res.render('buying', { buyers, items });
});

app.post('/buying', async (req, res) => {
    const props = Object.keys(req.body);
    const newBuying = new Buying({ id: 1 });
    const arutomb = [];

    for (let i = 0; i < props.length; i++) {
        const termek = await Item.findOne({ nev: props[i].trim() });
        console.log(termek);
        arutomb.push(termek._id);
    }

    newBuying.items = arutomb;
    await newBuying.save();
    console.log(newBuying);

    res.redirect('/buyings');
});

app.get('/buyings', async (req, res) => {
    const buyings = await Buying.find();
    res.render('buyings', { buyings });
});

app.post('/item', async (req, res) => {
    try {
        const { nev, kategoria, ar } = req.body;
        const newItem = new Item({ nev, kategoria, ar });
        await newItem.save();
        res.redirect('/item');
    } catch (error) {
        console.log(error.message);
    }
});

app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.render('items', { items });
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
