// imports
import bodyParser from 'body-parser';
import express from 'express';

import regularRouter from './routes';
import path from 'path';

const routersubcompanies = require('./api/routes/subCompaniesRoutes');
const locationRouter=require('./api/routes/locationRoutes');

const app = express();

const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// static files
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/SubCompanies', express.static(path.join(__dirname, 'public')));
app.use('/Locations', express.static(path.join(__dirname, 'public')));


// set views
app.set('views', './views');
app.set('view engine', 'ejs');


// routes

app.use('/', regularRouter);
app.use('/SubCompanies',routersubcompanies);
app.use('/Locations',locationRouter);

app.listen(PORT, () => {
   console.log(`Server Started at Port ${PORT}`)
}

);
