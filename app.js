const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const games = require("./routes/games");
const players = require("./routes/players");

app.use(bodyParser.json());
app.use(cors());

app.use("/games", games);
app.use("/players", players);

app.use(notFound);
app.use(errorHandler);

// eslint-disable-next-line
function notFound(req, res, next) {
    const url = req.originalUrl
    if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
        // Don't log less important (automatic) browser requests
        console.error('[404: Requested file not found] ', url)
    }
    res.status(404).send({error: 'Url not found', status: 404, url})
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

module.exports = app;
