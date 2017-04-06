'use strict';

const Boom = require('boom');

exports.register = (server, options, next) => {
    const Db = server.plugins.db;

    const createArbitro = (request, reply) => {
        const arbitro = {
            nome: request.payload.nome
        };

        Db.getModel('Arbitro')
            .create(arbitro)
            .then((created) => {
                return reply(created);
            })
            .catch((err) => {
                err.message = `arbitro-route-handler.createArbitro.ERROR: ${err.message}`;
            });
    }

    server.expose({
        createArbitro
    });

    return next();
}

exports.register.attributes ={
    name: 'arbitro-route-handler'
};