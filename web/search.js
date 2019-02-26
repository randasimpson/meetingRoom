const express = require('express');
const app = express();
const _ = require('underscore');
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;