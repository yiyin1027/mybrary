const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const client = require('./dynamodbConfig');


app.use(express.static('public'));
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.urlencoded({extended: true}))
app.use(expressLayout)
app.use(express.json());

app.set('view engine', 'ejs');
const rootRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use('/', rootRouter)
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000);