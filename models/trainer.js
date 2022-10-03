const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Trainer extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Trainer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },

  {
    hooks: {
      beforeCreate: async (newTrainerData) => {
        newTrainerData.password = await bcrypt.hash(newTrainerData.password, 10);
        return newTrainerData;
      },
      beforeUpdate: async (updatedTrainerData) => {
        updatedTrainerData.password = await bcrypt.hash(updatedTrainerData.password, 10);
        return updatedTrainerData;
      },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trainer',
  }
);

module.exports = Trainer; 
