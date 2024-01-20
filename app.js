require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mainRoutes = require('./server/routes/main'); 

//Starting server
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
const connectDB = require('/Users/gitikasaravanan/Desktop/UMDConnect-2024/server/config/db');
connectDB();

// Templating Engine 
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Bootstrap 
app.use('/css', express.static('UMDConnect/node_modules/bootstrap/dist/css'));
app.use('/', require('./server/routes/main'));

//Listening on port 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
