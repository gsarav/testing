require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mainRoutes = require('./server/routes/main'); 
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/css', express.static('UMDConnect/node_modules/bootstrap/dist/css'));
app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
