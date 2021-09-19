// language javascript
// path index.js
// build a resfful api with node;js express & mongoDB
// create a application for managing task list.

const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;
const Auth = require('./routes/AuthRoutesauth');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

//log request
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/css', express.static(path.resolve(__dirname,'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img', express.static(path.resolve(__dirname,'assets/img')));



// connect to mongoDB with verifications
mongoose.connect(
    process.env.DB_CONNECTION_STRING, {
        useMongoClient: true,
        useNewUrlParser: true
},
    (err) => {  
        if (err) {
            console.log('Error connecting to: ', process.env.DB_CONNECTION_STRING, err);
        } else {
            console.log('Successfully connected to: ', process.env.DB_CONNECTION_STRING);
        }
    }
);


//Middleware
app.use("api/user", Auth);

app.listen(Port, () => console.log(`listening on port ${Port}`));

