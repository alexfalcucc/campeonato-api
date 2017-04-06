'use strict';

const Joi = require('joi');
const { arbitroShema } = require('../schemas');

exports.register = (server, options, next) => {
    const {
        createArbitro
    } = server.plugins['arbitro-route-handler'];

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

