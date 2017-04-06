'use strict';

const Db = require('./db');

/** PLUGINS INTERNO */
const ArbitroRouteHandler = require('./route-handlers/arbitro-route-handler');

const plugins = [
    Db,
    ArbitroRouteHandler
];

module.exports = plugins;