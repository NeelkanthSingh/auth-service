const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Reached the basic page!!')
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`The Auth Service is listening on port ${PORT}`);
})