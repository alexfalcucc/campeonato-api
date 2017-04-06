'use strict';

const Db = require('./db');

/** PLUGINS INTERNO */
const ArbitroRouteHandler = require('./route-handlers/arbitro-route-handler');
const ArbitroRoute = require('./routes/arbitro');

const plugins = [
    Db,
    ArbitroRouteHandler,
    ArbitroRoute
];

module.exports = plugins;