'use strict';

const Joi = require('joi');
const { arbitroShema } = require('../schemas');

exports.register = (server, options, next) => {
    const {
        createArbitro,
        getArbitroById,
        getArbitroCollection
    } = server.plugins['arbitro-route-handler'];

    server.route([
        {
            method: 'GET',
            path: '/arbitro',
            config: {
                handler: getArbitroCollection
            }
        }
    ]);

    server.route([
        {
            method: 'GET',
            path: '/arbitro/{id}',
            config: {
                handler: getArbitroById
            }
        }
    ]);

    server.route([
        {
            method: 'POST',
            path: '/arbitro',
            config: {
                validate: {
                    payload: arbitroShema
                },
                handler: createArbitro
            }
        }
    ]);

    return next();
};

exports.register.attributes = {
    name: 'arbitro'
}

