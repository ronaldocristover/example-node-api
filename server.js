const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const dbUsername = `test`;
const dbPassword = `test`;
const dbName = 'test-nodetodo';
mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@ds163053.mlab.com:63053/${dbName}`);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log("Listening PORT : " + port);