const express = require('express');
const mongoose = require('mongoose');
let cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

//* Express Route
const users = require('./routes/api/users');
const studentRoute = require('./routes/students/student.route');

const app = express();

// Parsing middleware with bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to mongoDB
mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/auth', {
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo DB successfully Connected!'))
  .catch((error) => console.log(`Error occurred ${error}`));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport.js');

// Routes
app.use('/api/users', users);
app.use('/students', studentRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is up and running at port ${port}`));
