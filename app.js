const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config();


const secretKey = process.env.SECRET_KEY;
console.log("Salat Rounds Are: ", process.env.SALT_ROUNDS)
console.log("secret key is: ", secretKey)

const token = jwt.sign({
  data: 'Free the ducks'
}, secretKey, 
{ expiresIn: '1h' });

//verify a token
jwt.verify(
  token,
  secretKey,
  function (err, decoded) {
    console.log("Decoded", decoded); //bar
  }
);

console.log(token);
const date = new Date();
console.log("The unix time is: ", date.getTime());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
