'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Plugins = require('./plugins');

server.connection({
    host: 'localhost',
    port: process.env.PORT || 8000
});

server.register(Plugins, (err) => {
    if (err) {
        err.message = `Erro nos PLUGINS: ${err.message}`;
        console.log(err);
    }

    server.route({
        method: 'GET',
        path:'/hello', 
        handler: function (request, reply) {
            return reply('API Funcionando - Bem Vindos!');
        }
    });

    server.plugins.db.sequelize
        .sync({force: false })
        .then(() => {
            console.log('DB Conectado');
        });

    server.start((err) => {
        if (err) {
            err.message = `Erro ao startar o SERVER: ${err.message}`;
            console.log(err);
        }

        console.log(`Server running at ${server.info.uri}`);
    });
})

module.exports = server;