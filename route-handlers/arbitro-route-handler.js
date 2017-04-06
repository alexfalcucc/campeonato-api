'use strict';

const Boom = require('boom');

exports.register = (server, options, next) => {
    const db = server.plugins.db;

    const getArbitroCollection = (request, reply) => {
        db.getModel('Arbitro')
            .findAll()
            .then((arbitro) => {
                if (!arbitro) return reply(Boom.notFound());

                return reply(arbitro);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getArbitroById = (request, reply) => {
        db.getModel('Arbitro')
            .findById(request.params.id)
            .then((arbitro) => {
                if (!arbitro) return reply(Boom.notFound());

                return reply(arbitro);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const createArbitro = (request, reply) => {
        const arbitro = {
            nome: request.payload.nome
        };

        db.getModel('Arbitro')
            .create(arbitro)
            .then((created) => {
                return reply(created);
            })
            .catch((err) => {
                err.message = `arbitro-route-handler.createArbitro.ERROR: ${err.message}`;
            });
    }

    server.expose({
        getArbitroCollection,
        createArbitro,
        getArbitroById
    });

    return next();
}

exports.register.attributes ={
    name: 'arbitro-route-handler'
};