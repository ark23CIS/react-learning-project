const express = require('express');
const mongoURI = require('./config/default').mongoURI;
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongoDB connected'))
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('HELLO');
})

app.listen(PORT, () => {
    console.log(`server listening at ${PORT} port`);
})