const db = require('./db')
const express = require('express')
const cors = require('cors')


const app = express();
const router = express.Router();

db.getCharacters().then(result => {
    console.log(result)
})