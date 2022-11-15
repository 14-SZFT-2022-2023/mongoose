require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Buyer = require('./models/Buyer');
const Buying = require('./models/Buying');
const Item = require('./models/Item');
const PORT = process.env.PORT || 3500;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

// Adatbázis csatlakozás
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) return console.log(err);
  console.log('Csatlakoztunk!');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/buyer', (req, res) => {
  res.render('buyer');
});

app.post('/buyer', async (req, res) => {
  try {
    const { buyerId, nev, cim } = req.body;
    const newBuyer = new Buyer({ buyerId, nev, cim });
    await newBuyer.save();
    res.redirect('/buyers');
  } catch (error) {
    console.log(error.message);
  }
});

app.get('/buyers', async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.render('buyers', { buyers });
  } catch (error) {
    console.log(error.message);
  }
});

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

app.get('/item', (req, res) => {
  res.render('item');
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
