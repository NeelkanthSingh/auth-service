const express = require('express')
require('dotenv').config()
const cors = require('cors')
const corsOptions = require('./config/corsOption')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    console.log('Reached the basic page!!')
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`The Auth Service is listening on port ${PORT}`);
})