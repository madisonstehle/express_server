'use strict';

const app = require('./lib/server.js');

app.start(3000 || process.env.PORT);