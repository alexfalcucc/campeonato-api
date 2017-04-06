'use strict';

module.exports = (sequelize, DataType) => {
    const Arbitro = sequelize.define('Arbitro', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
        classMethods: {
            associate: (models) => {
            }
        },
        freezeTableName: true

    });
    return Arbitro;
};