require('./models/mongodb');
 
const express = require('express');
const TaskController = require('./controllers/TaskController');
const path = require('path');
const exphb = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser');
 

var app = express ();
app.use(bodyparser.urlencoded({
extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/',handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');
 

app.listen(5000,() => {
console.log('Express Server Started')
});
 

app.use('/Task', TaskController);