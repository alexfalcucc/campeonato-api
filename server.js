'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Plugins = require('./plugins');

server.connection({
    host: 'localhost',
    port: 8000
});

server.register(Plugins, (err) => {
    if (err) {
        err.message = `Erro nos PLUGINS: ${err.message}`;
        console.log(err);
    }

    server.start((err) => {
        if (err) {
            err.message = `Erro ao starta o SERVER: ${err.message}`;
            console.log(err);
        }

        console.log(`Server running at ${server.info.uri}`);
    });
})

module.exports = server;