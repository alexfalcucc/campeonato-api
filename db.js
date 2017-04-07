'use strict';

const Fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');

let db = null;

exports.register = (server, options, next) => {
    if (!db) {

        var database = process.env.DATABASE_URL || 'campeonatodb'

        const sequelize = new Sequelize(database, 'postgres', '', {
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

        const dir = Path.join(__dirname, 'models');
        Fs.readdirSync(dir).forEach((file) => {
            const modelDir = Path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach((key) => {
            db.models[key].associate(db.models);
        });

        server.expose(db);

        return next();

    }
};

exports.register.attributes = {
    name: 'db'
};