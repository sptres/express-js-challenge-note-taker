// import express.js, and routes for api, and html
const express = require('express');
const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js');

// initialize the app and create listening port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware setup
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// set up listen function as well as logging which port the server is being ran
app.listen(PORT, () => {
    console.log(`Sever now listening on ${PORT}`)
});