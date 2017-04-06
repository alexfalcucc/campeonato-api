'use strict';

const Joi = require('joi');

const arbitroSchema = Joi.object().keys({
    nome: Joi.string().required().max(200).description('Nome do arbitro')
}).description('Objeto Arbitro');

module.exports = arbitroSchema;