require('dotenv').config();

//const { prototype } = require('connect-mongo');
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
// const router = express.Router();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/css', express.static('UMDConnect/node_modules/bootstrap/dist/css'));
app.use('/', require('./server/routes/main'));


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`);
})