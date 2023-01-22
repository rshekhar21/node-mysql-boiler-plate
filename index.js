require('dotenv').config();
const path=require('path');
const express=require('express');
const cookieParser = require('cookie-parser')
const app=express();
const port=process.env.port||3200;
const log=console.log;
const ejs = require('ejs');
ejs.delimiter='?';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/app', require('./router/router'))
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => log(`server running at http://localhost:${port}`));

