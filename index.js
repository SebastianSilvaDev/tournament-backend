const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const tournaments = require('./routes/tournamentRoute');
const users = require('./routes/userRoute');

const port = process.env.PORT || 3000;
const db = process.env.DB;

mongoose.connect(db);

let app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('', (req, res, next) => {
    res.redirect('/v1/tournaments');
})

app.use('/v1/tournaments', tournaments);
app.use('/v1/users', users);

app.listen(port);