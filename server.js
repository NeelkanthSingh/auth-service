const express = require('express');
require('dotenv').config();
const cors = require('cors');
const corsOptions = require('./config/corsOption');
const credentials = require('./middleware/credentials');
const cookieParser = require('cookie-parser');
const { logger } = require('./middleware/logEvents');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Reached the basic page!!')
    res.sendStatus(200);
})

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.listen(PORT, () => {
    console.log(`The Auth Service is listening on port ${PORT}`);
})