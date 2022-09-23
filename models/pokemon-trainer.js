const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PokemonTrainer extends Model { }

PokemonTrainer.init(
    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        trainer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trainer',
                key: 'id'
            }
        },
        pokemon_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id'
            }
        },

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokemon_trainer',

    });


    module.exports = PokemonTrainer;