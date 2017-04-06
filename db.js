'use strict';

const Sequelize = require('sequelize');

let db = null;

exports.register = (server, options, next) => {
    if (!db) {
        const sequelize = new Sequelize('campeonatodb', 'root', 'root', {
            host: 'localhost',
            dialect: 'postgres'
        });

        db = {
            sequelize,
            Sequelize,
            models: {},
            getModel: function(modelName) {
                return db.models[modelName];
            },
            getModels: function() {
                return db.models;
            }
        };

    }
}