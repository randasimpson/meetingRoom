const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {Client} = require('pg');

// const client = new Client({
//     host: 'pgdb.',
//     database: '',
//     port: ,
//     user: '',
//     password: '',
// });

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log(`Connected to ${client.database} dB`)
    }
});

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(cors());

//Route handlers here


app.listen(port, () => {
    console.log(`Listing on port ${port}`);
});
